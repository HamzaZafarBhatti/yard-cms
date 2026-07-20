import React, { useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Separator } from '@/Components/ui/separator';

export default function Show({ auth, service }) {
    const { errors } = usePage().props;
    const provider = service.provider;
    
    // Group time slots by day
    const timeSlotsByDay = provider.time_slots.reduce((acc, slot) => {
        if (!acc[slot.day_of_week]) acc[slot.day_of_week] = [];
        acc[slot.day_of_week].push(slot);
        return acc;
    }, {});

    const { data, setData, post, processing } = useForm({
        service_id: service.id,
        time_slot_id: '',
        booking_date: '',
        notes: '',
    });

    const [selectedDay, setSelectedDay] = useState('');

    const handleDayChange = (e) => {
        const dateStr = e.target.value;
        setData('booking_date', dateStr);
        if (dateStr) {
            const dateObj = new Date(dateStr);
            const dayOfWeek = dateObj.getDay(); // 0 is Sunday
            setSelectedDay(dayOfWeek.toString());
            setData('time_slot_id', ''); // Reset time slot on day change
        } else {
            setSelectedDay('');
            setData('time_slot_id', '');
        }
    };

    const submitBooking = (e) => {
        e.preventDefault();
        post(route('customer.book'), {
            preserveScroll: true,
        });
    };

    const content = (
        <>
            <Head title={service.name} />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8">
                <Link href={route('services.index')} className="text-green-600 hover:underline mb-4 inline-block">
                    &larr; Back to services
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Col - Service details */}
                    <div className="md:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <div className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">
                                    {service.category?.name}
                                </div>
                                <CardTitle className="text-3xl text-slate-800">{service.name}</CardTitle>
                                <div className="text-lg text-slate-600 mt-2">
                                    £{parseFloat(service.price).toFixed(2)} &bull; {service.duration_minutes} mins
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="prose max-w-none text-slate-700 whitespace-pre-wrap">
                                    {service.description}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Provider Info & Reviews */}
                        <Card>
                            <CardHeader>
                                <CardTitle>About the Provider</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold text-xl">
                                        {provider.business_name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg text-slate-800">{provider.business_name}</div>
                                        <div className="text-sm text-slate-500">
                                            {provider.city}{provider.county ? `, ${provider.county}` : ''}
                                        </div>
                                        <div className="text-sm text-yellow-500 font-medium">
                                            &#9733; {parseFloat(provider.average_rating || 0).toFixed(1)} ({provider.total_reviews} reviews)
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    {provider.description}
                                </p>

                                <Separator />

                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-4">Recent Reviews</h4>
                                    {provider.reviews.length === 0 ? (
                                        <div className="text-sm text-slate-500">No reviews yet.</div>
                                    ) : (
                                        <div className="space-y-4">
                                            {provider.reviews.map(review => (
                                                <div key={review.id} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <div className="font-semibold text-sm text-slate-800">{review.user?.name}</div>
                                                            <div className="text-xs text-slate-500">{new Date(review.created_at).toLocaleDateString()}</div>
                                                        </div>
                                                        <div className="text-yellow-500 text-sm">&#9733; {review.rating}/5</div>
                                                    </div>
                                                    <div className="font-medium text-sm text-slate-800">{review.title}</div>
                                                    <p className="text-sm text-slate-600 mt-1">{review.comment}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Col - Booking */}
                    <div>
                        <Card className="sticky top-6">
                            <CardHeader>
                                <CardTitle>Book this Service</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {!auth.user ? (
                                    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                                        <p className="text-sm text-slate-600 mb-4">Please log in to book this service.</p>
                                        <Link href={route('login')}>
                                            <Button className="w-full">Log In to Book</Button>
                                        </Link>
                                    </div>
                                ) : (
                                    <form onSubmit={submitBooking} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Pick a Date</label>
                                            <input 
                                                type="date" 
                                                className="w-full border-slate-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500" 
                                                min={new Date().toISOString().split('T')[0]}
                                                value={data.booking_date}
                                                onChange={handleDayChange}
                                                required
                                            />
                                            {errors.booking_date && <div className="text-red-500 text-xs mt-1">{errors.booking_date}</div>}
                                        </div>

                                        {data.booking_date && (
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-1">Available Times</label>
                                                {timeSlotsByDay[selectedDay] && timeSlotsByDay[selectedDay].length > 0 ? (
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {timeSlotsByDay[selectedDay].map(slot => (
                                                            <button
                                                                type="button"
                                                                key={slot.id}
                                                                onClick={() => setData('time_slot_id', slot.id)}
                                                                className={`py-2 px-3 text-sm rounded-md border text-center transition-colors ${
                                                                    data.time_slot_id === slot.id 
                                                                        ? 'bg-green-600 text-white border-green-600' 
                                                                        : 'bg-white text-slate-700 border-slate-300 hover:border-green-500'
                                                                }`}
                                                            >
                                                                {slot.start_time.substring(0, 5)} - {slot.end_time.substring(0, 5)}
                                                            </button>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="text-sm text-slate-500 italic p-3 bg-slate-50 rounded-md border border-slate-100">
                                                        No slots available on this day.
                                                    </div>
                                                )}
                                                {errors.time_slot_id && <div className="text-red-500 text-xs mt-1">{errors.time_slot_id}</div>}
                                            </div>
                                        )}

                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Notes (optional)</label>
                                            <textarea 
                                                className="w-full border-slate-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                                                rows="3"
                                                value={data.notes}
                                                onChange={e => setData('notes', e.target.value)}
                                                placeholder="Any special requests..."
                                            ></textarea>
                                            {errors.notes && <div className="text-red-500 text-xs mt-1">{errors.notes}</div>}
                                        </div>

                                        <Button 
                                            type="submit" 
                                            className="w-full" 
                                            disabled={processing || !data.time_slot_id || !data.booking_date}
                                        >
                                            {processing ? 'Processing...' : 'Book Now'}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );

    if (auth.user) {
        return (
            <AuthenticatedLayout user={auth.user}>
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
