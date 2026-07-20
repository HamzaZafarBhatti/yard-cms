import React, { useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

export default function Dashboard({ auth, bookings }) {
    const { flash } = usePage().props;
    const [reviewBookingId, setReviewBookingId] = useState(null);

    const { data, setData, post, processing, reset, errors } = useForm({
        rating: '5',
        title: '',
        comment: '',
    });

    const openReviewForm = (id) => {
        setReviewBookingId(id);
        reset();
    };

    const submitReview = (e, bookingId) => {
        e.preventDefault();
        post(route('customer.bookings.review', bookingId), {
            preserveScroll: true,
            onSuccess: () => {
                setReviewBookingId(null);
                reset();
            }
        });
    };

    const cancelForm = useForm();

    const handleCancel = (bookingId) => {
        if (confirm('Are you sure you want to cancel this booking?')) {
            cancelForm.put(route('customer.bookings.cancel', bookingId), {
                preserveScroll: true,
            });
        }
    };

    const getStatusBadge = (status) => {
        const styles = {
            pending: 'bg-yellow-100 text-yellow-800',
            confirmed: 'bg-blue-100 text-blue-800',
            completed: 'bg-green-100 text-green-800',
            cancelled: 'bg-red-100 text-red-800',
        };
        const defaultStyle = 'bg-slate-100 text-slate-800';
        
        return (
            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${styles[status] || defaultStyle}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-slate-800 leading-tight">My Dashboard</h2>}
        >
            <Head title="Customer Dashboard" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                
                {flash?.success && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-green-700">{flash.success}</p>
                            </div>
                        </div>
                    </div>
                )}
                
                {flash?.error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">{flash.error}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-slate-900">My Bookings</h3>
                    <Link href={route('services.index')}>
                        <Button>Browse Services</Button>
                    </Link>
                </div>

                <Card>
                    <CardContent className="p-0">
                        {bookings.data.length === 0 ? (
                            <div className="text-center py-12 text-slate-500">
                                You have no bookings yet.
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Reference</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Service</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date & Time</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-200">
                                        {bookings.data.map((booking) => (
                                            <React.Fragment key={booking.id}>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                                                        {booking.reference}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-slate-900 font-medium">{booking.service?.name}</div>
                                                        <div className="text-sm text-slate-500">by {booking.provider?.business_name}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                                        <div>{new Date(booking.booking_date).toLocaleDateString()}</div>
                                                        <div>{booking.start_time?.substring(0, 5)} - {booking.end_time?.substring(0, 5)}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {getStatusBadge(booking.status)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        {(booking.status === 'pending' || booking.status === 'confirmed') && (
                                                            <button 
                                                                onClick={() => handleCancel(booking.id)}
                                                                className="text-red-600 hover:text-red-900 ml-4"
                                                                disabled={cancelForm.processing}
                                                            >
                                                                Cancel
                                                            </button>
                                                        )}
                                                        
                                                        {booking.status === 'completed' && !booking.review && reviewBookingId !== booking.id && (
                                                            <button 
                                                                onClick={() => openReviewForm(booking.id)}
                                                                className="text-green-600 hover:text-green-900 ml-4"
                                                            >
                                                                Leave Review
                                                            </button>
                                                        )}
                                                        
                                                        {booking.review && (
                                                            <span className="text-slate-400 italic ml-4 text-xs">Reviewed</span>
                                                        )}
                                                    </td>
                                                </tr>
                                                
                                                {/* Review Form Row */}
                                                {reviewBookingId === booking.id && (
                                                    <tr>
                                                        <td colSpan="5" className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                                                            <form onSubmit={(e) => submitReview(e, booking.id)} className="space-y-4 max-w-2xl mx-auto">
                                                                <h4 className="font-medium text-slate-800">Leave a Review for {booking.service?.name}</h4>
                                                                
                                                                <div>
                                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Rating (1-5)</label>
                                                                    <select 
                                                                        className="w-full border-slate-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                                                                        value={data.rating}
                                                                        onChange={e => setData('rating', e.target.value)}
                                                                    >
                                                                        {[5,4,3,2,1].map(num => (
                                                                            <option key={num} value={num}>{num} Stars</option>
                                                                        ))}
                                                                    </select>
                                                                    {errors.rating && <div className="text-red-500 text-xs mt-1">{errors.rating}</div>}
                                                                </div>
                                                                
                                                                <div>
                                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                                                                    <input 
                                                                        type="text" 
                                                                        className="w-full border-slate-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                                                                        value={data.title}
                                                                        onChange={e => setData('title', e.target.value)}
                                                                        placeholder="Summarize your experience"
                                                                    />
                                                                    {errors.title && <div className="text-red-500 text-xs mt-1">{errors.title}</div>}
                                                                </div>
                                                                
                                                                <div>
                                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Comment</label>
                                                                    <textarea 
                                                                        className="w-full border-slate-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                                                                        rows="3"
                                                                        value={data.comment}
                                                                        onChange={e => setData('comment', e.target.value)}
                                                                        placeholder="Write your review here..."
                                                                    ></textarea>
                                                                    {errors.comment && <div className="text-red-500 text-xs mt-1">{errors.comment}</div>}
                                                                </div>
                                                                
                                                                <div className="flex gap-2 justify-end">
                                                                    <Button type="button" variant="outline" onClick={() => setReviewBookingId(null)}>Cancel</Button>
                                                                    <Button type="submit" disabled={processing}>Submit Review</Button>
                                                                </div>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Pagination */}
                {bookings.links && bookings.links.length > 3 && (
                    <div className="flex justify-center gap-1 flex-wrap">
                        {bookings.links.map((link, i) => (
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
        </AuthenticatedLayout>
    );
}
