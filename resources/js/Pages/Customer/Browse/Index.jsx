import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';

export default function Index({ auth, services, categories, filters }) {
    const { data, setData, get } = useForm({
        search: filters.search || '',
        category: filters.category || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('services.index'));
    };

    const handleCategoryClick = (categoryId) => {
        setData('category', categoryId === data.category ? '' : categoryId);
        // We need to trigger the get after state updates, so let's use router.get or useEffect
    };

    // To make category click submit immediately, we can use Inertia router instead of useForm for it if preferred,
    // or just call get manually after updating. Since setData is async in nature, we can just do:
    const submitCategory = (categoryId) => {
        const newCat = categoryId === data.category ? '' : categoryId;
        get(route('services.index', { search: data.search, category: newCat }));
    };

    const content = (
        <>
            <Head title="Browse Services" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="w-full md:w-1/4 space-y-6">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <Input 
                            type="text" 
                            placeholder="Search services..." 
                            value={data.search}
                            onChange={(e) => setData('search', e.target.value)}
                            className="w-full"
                        />
                        <Button type="submit">Search</Button>
                    </form>

                    <div>
                        <h3 className="font-semibold text-lg text-slate-800 mb-3">Categories</h3>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => submitCategory('')}
                                className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                    data.category === '' 
                                        ? 'bg-green-100 text-green-800 font-medium' 
                                        : 'text-slate-600 hover:bg-slate-100'
                                }`}
                            >
                                All Categories
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => submitCategory(category.id)}
                                    className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                        parseInt(data.category) === category.id 
                                            ? 'bg-green-100 text-green-800 font-medium' 
                                            : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="w-full md:w-3/4">
                    {services.data.length === 0 ? (
                        <div className="text-center py-12 text-slate-500">
                            No services found matching your criteria.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.data.map((service) => (
                                <Card key={service.id} className="flex flex-col justify-between">
                                    <CardHeader>
                                        <div className="text-xs text-green-600 font-semibold mb-1">
                                            {service.category?.name}
                                        </div>
                                        <CardTitle className="text-lg line-clamp-1">
                                            {service.name}
                                        </CardTitle>
                                        <div className="text-sm text-slate-500">
                                            by {service.provider?.business_name}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                                            {service.short_description || service.description}
                                        </p>
                                        <div className="flex justify-between items-center text-sm font-medium">
                                            <span className="text-slate-900">£{parseFloat(service.price).toFixed(2)}</span>
                                            <span className="text-slate-500">{service.duration_minutes} mins</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href={route('services.show', service.slug)} className="w-full">
                                            <Button className="w-full" variant="outline">View Details</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}

                    {/* Pagination - simple version */}
                    {services.links && services.links.length > 3 && (
                        <div className="mt-8 flex justify-center gap-1 flex-wrap">
                            {services.links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url || '#'}
                                    className={`px-3 py-1 border rounded-md text-sm ${
                                        link.active ? 'bg-green-600 text-white border-green-600' : 'bg-white text-slate-600 hover:bg-slate-50'
                                    } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                    preserveScroll
                                    preserveState
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );

    if (auth.user) {
        return (
            <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-slate-800 leading-tight">Browse Services</h2>}>
                {content}
            </AuthenticatedLayout>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl text-green-600">WorkYarder</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href={route('login')} className="text-sm text-slate-600">Login</Link>
                        <Link href={route('register')} className="text-sm text-slate-600">Register</Link>
                    </div>
                </div>
            </nav>
            <main>{content}</main>
        </div>
    );
}
