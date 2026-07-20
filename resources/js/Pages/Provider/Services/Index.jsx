import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import ProviderLayout from '@/Layouts/ProviderLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

export default function Index({ services }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this service?')) {
            destroy(route('provider.services.destroy', id));
        }
    };

    return (
        <ProviderLayout>
            <Head title="My Services" />
            
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">My Services</h2>
                    <p className="text-slate-500">Manage the services you offer to customers.</p>
                </div>
                <Link href={route('provider.services.create')}>
                    <Button className="bg-green-600 hover:bg-green-700">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Service
                    </Button>
                </Link>
            </div>

            {services.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-12">
                        <div className="rounded-full bg-slate-100 p-3 mb-4">
                            <PlusCircle className="h-6 w-6 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-medium text-slate-900 mb-1">No services yet</h3>
                        <p className="text-sm text-slate-500 mb-4">You haven't added any services. Add your first service to get started.</p>
                        <Link href={route('provider.services.create')}>
                            <Button className="bg-green-600 hover:bg-green-700">Add Service</Button>
                        </Link>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.id} className="rounded-3xl overflow-hidden shadow-sm">
                            <CardHeader className="pb-4 border-b">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg font-semibold text-slate-900">
                                            {service.name}
                                        </CardTitle>
                                        <CardDescription className="text-slate-500 mt-1">
                                            {service.category?.name}
                                        </CardDescription>
                                    </div>
                                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${service.is_active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                                        {service.is_active ? 'Active' : 'Inactive'}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Price</span>
                                        <span className="font-medium text-slate-900">
                                            £{Number(service.price).toFixed(2)} {service.price_type === 'hourly' ? '/hr' : ''} {service.price_type === 'starting_at' ? '(Starting at)' : ''}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Duration</span>
                                        <span className="font-medium text-slate-900">{service.duration_minutes} mins</span>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-2">
                                    <Link href={route('provider.services.edit', service.id)}>
                                        <Button variant="outline" size="sm" className="h-8">
                                            <Pencil className="h-3.5 w-3.5 mr-1" />
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="h-8 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                                        onClick={() => handleDelete(service.id)}
                                    >
                                        <Trash2 className="h-3.5 w-3.5 mr-1" />
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </ProviderLayout>
    );
}
