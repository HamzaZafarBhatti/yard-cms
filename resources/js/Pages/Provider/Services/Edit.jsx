import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import ProviderLayout from '@/Layouts/ProviderLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { ArrowLeft } from 'lucide-react';

export default function Edit({ service, categories }) {
    const { data, setData, put, processing, errors } = useForm({
        category_id: service.category_id || '',
        name: service.name || '',
        short_description: service.short_description || '',
        description: service.description || '',
        price: service.price || '',
        price_type: service.price_type || 'fixed',
        duration_minutes: service.duration_minutes || '60',
        is_active: service.is_active === 1 || service.is_active === true,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('provider.services.update', service.id));
    };

    return (
        <ProviderLayout>
            <Head title={`Edit ${service.name}`} />
            
            <div className="mb-6">
                <Link href={route('provider.services.index')} className="text-sm text-slate-500 hover:text-slate-700 flex items-center mb-4">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Services
                </Link>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Edit Service</h2>
            </div>

            <Card className="rounded-3xl shadow-sm max-w-3xl">
                <CardHeader className="border-b pb-4">
                    <CardTitle>Service Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">Service Name *</label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="category_id" className="text-sm font-medium text-slate-700">Category *</label>
                                <select
                                    id="category_id"
                                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={data.category_id}
                                    onChange={(e) => setData('category_id', e.target.value)}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                {errors.category_id && <p className="text-sm text-red-600">{errors.category_id}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="price" className="text-sm font-medium text-slate-700">Price (£) *</label>
                                <Input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                />
                                {errors.price && <p className="text-sm text-red-600">{errors.price}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="price_type" className="text-sm font-medium text-slate-700">Price Type *</label>
                                <select
                                    id="price_type"
                                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={data.price_type}
                                    onChange={(e) => setData('price_type', e.target.value)}
                                >
                                    <option value="fixed">Fixed Price</option>
                                    <option value="hourly">Hourly Rate</option>
                                    <option value="starting_at">Starting At</option>
                                </select>
                                {errors.price_type && <p className="text-sm text-red-600">{errors.price_type}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="duration_minutes" className="text-sm font-medium text-slate-700">Duration (Minutes) *</label>
                                <Input
                                    id="duration_minutes"
                                    type="number"
                                    min="15"
                                    step="15"
                                    value={data.duration_minutes}
                                    onChange={(e) => setData('duration_minutes', e.target.value)}
                                />
                                {errors.duration_minutes && <p className="text-sm text-red-600">{errors.duration_minutes}</p>}
                            </div>

                            <div className="space-y-2 flex items-center h-full pt-6">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="rounded border-slate-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 h-5 w-5"
                                        checked={data.is_active}
                                        onChange={(e) => setData('is_active', e.target.checked)}
                                    />
                                    <span className="text-sm font-medium text-slate-700">Service is active and visible</span>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="short_description" className="text-sm font-medium text-slate-700">Short Description</label>
                            <Input
                                id="short_description"
                                value={data.short_description}
                                onChange={(e) => setData('short_description', e.target.value)}
                            />
                            {errors.short_description && <p className="text-sm text-red-600">{errors.short_description}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="text-sm font-medium text-slate-700">Detailed Description</label>
                            <textarea
                                id="description"
                                className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            {errors.description && <p className="text-sm text-red-600">{errors.description}</p>}
                        </div>

                        <div className="flex justify-end pt-4 border-t">
                            <Link href={route('provider.services.index')}>
                                <Button type="button" variant="outline" className="mr-3">Cancel</Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="bg-green-600 hover:bg-green-700">
                                Update Service
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </ProviderLayout>
    );
}
