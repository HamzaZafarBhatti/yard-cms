import React from 'react';
import { Head, Link } from '@inertiajs/react';
import ProviderLayout from '@/Layouts/ProviderLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Calendar, Clock, Eye, User } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function Index({ bookings }) {
    const getStatusBadge = (status) => {
        const styles = {
            pending: 'bg-amber-100 text-amber-800',
            confirmed: 'bg-blue-100 text-blue-800',
            completed: 'bg-green-100 text-green-800',
            cancelled: 'bg-red-100 text-red-800',
        };
        
        return (
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-800'}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <ProviderLayout>
            <Head title="My Bookings" />
            
            <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Bookings</h2>
                <p className="text-slate-500">Manage your appointments and customer bookings.</p>
            </div>

            {bookings.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-12">
                        <div className="rounded-full bg-slate-100 p-3 mb-4">
                            <Calendar className="h-6 w-6 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-medium text-slate-900 mb-1">No bookings yet</h3>
                        <p className="text-sm text-slate-500">You don't have any bookings at the moment.</p>
                    </CardContent>
                </Card>
            ) : (
                <Card className="rounded-3xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Reference</th>
                                    <th className="px-6 py-4 font-medium">Customer</th>
                                    <th className="px-6 py-4 font-medium">Service</th>
                                    <th className="px-6 py-4 font-medium">Date & Time</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="bg-white border-b hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">
                                            {booking.reference}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                                                    <User className="h-4 w-4 text-slate-500" />
                                                </div>
                                                <span className="font-medium text-slate-900">{booking.user?.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            {booking.service?.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col space-y-1">
                                                <span className="font-medium text-slate-900 flex items-center">
                                                    <Calendar className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                                                    {format(parseISO(booking.booking_date), 'MMM d, yyyy')}
                                                </span>
                                                <span className="text-slate-500 flex items-center text-xs">
                                                    <Clock className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                                                    {booking.start_time.substring(0, 5)} - {booking.end_time.substring(0, 5)}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {getStatusBadge(booking.status)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link href={route('provider.bookings.show', booking.id)}>
                                                <Button variant="outline" size="sm" className="h-8">
                                                    <Eye className="h-3.5 w-3.5 mr-1.5" />
                                                    View
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            )}
        </ProviderLayout>
    );
}
