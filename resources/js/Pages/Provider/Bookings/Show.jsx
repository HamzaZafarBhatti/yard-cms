import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import ProviderLayout from '@/Layouts/ProviderLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle, XCircle, FileText } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { Input } from '@/Components/ui/input';

export default function Show({ booking }) {
    const [isCancelling, setIsCancelling] = useState(false);
    const { data, setData, put, processing, errors, reset } = useForm({
        status: '',
        cancellation_reason: ''
    });

    const updateStatus = (status) => {
        data.status = status;
        if (status === 'cancelled' && !isCancelling) {
            setIsCancelling(true);
            return;
        }
        
        put(route('provider.bookings.update-status', booking.id), {
            onSuccess: () => {
                setIsCancelling(false);
                reset();
            }
        });
    };

    const getStatusBadge = (status) => {
        const styles = {
            pending: 'bg-amber-100 text-amber-800 border-amber-200',
            confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
            completed: 'bg-green-100 text-green-800 border-green-200',
            cancelled: 'bg-red-100 text-red-800 border-red-200',
        };
        
        return (
            <span className={`px-3 py-1.5 rounded-full text-sm font-semibold border ${styles[status] || 'bg-slate-100 text-slate-800'}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <ProviderLayout>
            <Head title={`Booking ${booking.reference}`} />
            
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <Link href={route('provider.bookings.index')} className="text-sm text-slate-500 hover:text-slate-700 flex items-center mb-2">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Bookings
                    </Link>
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                            Booking {booking.reference}
                        </h2>
                        {getStatusBadge(booking.status)}
                    </div>
                </div>

                <div className="flex gap-2">
                    {booking.status === 'pending' && (
                        <>
                            <Button 
                                onClick={() => updateStatus('confirmed')} 
                                disabled={processing}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Confirm Booking
                            </Button>
                            <Button 
                                onClick={() => updateStatus('cancelled')} 
                                disabled={processing}
                                variant="outline" 
                                className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                            >
                                <XCircle className="mr-2 h-4 w-4" />
                                Decline
                            </Button>
                        </>
                    )}
                    
                    {booking.status === 'confirmed' && (
                        <>
                            <Button 
                                onClick={() => updateStatus('completed')} 
                                disabled={processing}
                                className="bg-green-600 hover:bg-green-700"
                            >
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark Completed
                            </Button>
                            <Button 
                                onClick={() => updateStatus('cancelled')} 
                                disabled={processing}
                                variant="outline" 
                                className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                            >
                                <XCircle className="mr-2 h-4 w-4" />
                                Cancel
                            </Button>
                        </>
                    )}
                </div>
            </div>

            {isCancelling && (
                <Card className="mb-6 border-red-200 bg-red-50">
                    <CardContent className="pt-6">
                        <h3 className="text-lg font-medium text-red-800 mb-2">Cancel Booking</h3>
                        <p className="text-sm text-red-600 mb-4">Please provide a reason for cancelling this booking.</p>
                        <div className="flex gap-3 items-start">
                            <div className="flex-1">
                                <Input
                                    value={data.cancellation_reason}
                                    onChange={e => setData('cancellation_reason', e.target.value)}
                                    placeholder="Reason for cancellation..."
                                    className="bg-white"
                                />
                                {errors.cancellation_reason && <p className="text-sm text-red-600 mt-1">{errors.cancellation_reason}</p>}
                            </div>
                            <Button 
                                onClick={() => updateStatus('cancelled')} 
                                disabled={processing}
                                variant="destructive"
                            >
                                Confirm Cancellation
                            </Button>
                            <Button 
                                onClick={() => setIsCancelling(false)} 
                                variant="outline"
                            >
                                Abort
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <Card className="rounded-3xl shadow-sm">
                        <CardHeader className="border-b pb-4">
                            <CardTitle>Booking Details</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 mb-1">Service</h4>
                                    <p className="font-medium text-slate-900">{booking.service?.name}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 mb-1">Total Price</h4>
                                    <p className="font-medium text-slate-900">£{Number(booking.total_price).toFixed(2)}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 mb-1 flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        Date
                                    </h4>
                                    <p className="font-medium text-slate-900">
                                        {format(parseISO(booking.booking_date), 'EEEE, MMMM d, yyyy')}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 mb-1 flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        Time
                                    </h4>
                                    <p className="font-medium text-slate-900">
                                        {booking.start_time.substring(0, 5)} - {booking.end_time.substring(0, 5)}
                                    </p>
                                </div>
                            </div>

                            {booking.notes && (
                                <div className="mt-6 pt-6 border-t">
                                    <h4 className="text-sm font-medium text-slate-500 mb-2 flex items-center">
                                        <FileText className="h-4 w-4 mr-1" />
                                        Customer Notes
                                    </h4>
                                    <p className="text-slate-700 bg-slate-50 p-4 rounded-xl text-sm">
                                        {booking.notes}
                                    </p>
                                </div>
                            )}

                            {booking.status === 'cancelled' && booking.cancellation_reason && (
                                <div className="mt-6 pt-6 border-t">
                                    <h4 className="text-sm font-medium text-red-500 mb-2">Cancellation Reason</h4>
                                    <p className="text-red-700 bg-red-50 p-4 rounded-xl text-sm">
                                        {booking.cancellation_reason}
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="rounded-3xl shadow-sm">
                        <CardHeader className="border-b pb-4">
                            <CardTitle>Customer Details</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                                    <User className="h-5 w-5 text-slate-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">{booking.user?.name}</p>
                                    <p className="text-xs text-slate-500">Customer since {format(parseISO(booking.user?.created_at), 'MMM yyyy')}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-2 text-slate-600">
                                    <Mail className="h-4 w-4 mt-0.5 text-slate-400" />
                                    <span>{booking.user?.email}</span>
                                </div>
                                {booking.user?.phone && (
                                    <div className="flex items-start gap-2 text-slate-600">
                                        <Phone className="h-4 w-4 mt-0.5 text-slate-400" />
                                        <span>{booking.user?.phone}</span>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProviderLayout>
    );
}
