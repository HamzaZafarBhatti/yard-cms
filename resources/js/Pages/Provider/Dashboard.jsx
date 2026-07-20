import ProviderLayout from '@/Layouts/ProviderLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Briefcase, Calendar, Star, CheckCircle, AlertCircle } from 'lucide-react';

export default function Dashboard({ auth, stats }) {
    return (
        <ProviderLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-slate-800 leading-tight">Provider Dashboard</h2>}
        >
            <Head title="Provider Dashboard" />

            <div className="space-y-8">
                {/* Status Alert */}
                {stats.status === 'pending' && (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                        <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-amber-900 text-lg">Your account is under review</h3>
                            <p className="text-amber-800 mt-1">
                                We're currently reviewing your business details. You won't be visible to customers until your account is approved.
                            </p>
                        </div>
                    </div>
                )}
                
                {stats.status === 'approved' && (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                        <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-green-900 text-lg">Your account is active</h3>
                            <p className="text-green-800 mt-1">
                                Your provider profile is live and visible to customers. Keep your availability updated!
                            </p>
                        </div>
                    </div>
                )}

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="rounded-3xl border-slate-200 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Total Services</CardTitle>
                            <Briefcase className="h-4 w-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">{stats.services_count}</div>
                            <p className="text-xs text-slate-500 mt-1">Active services offered</p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl border-slate-200 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Total Bookings</CardTitle>
                            <Calendar className="h-4 w-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">{stats.bookings_count}</div>
                            <p className="text-xs text-slate-500 mt-1">All time bookings</p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl border-slate-200 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Average Rating</CardTitle>
                            <Star className="h-4 w-4 text-amber-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">{parseFloat(stats.average_rating).toFixed(1)}</div>
                            <p className="text-xs text-slate-500 mt-1">Based on {stats.reviews_count} reviews</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions or Recent Activity could go here */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <Card className="rounded-3xl border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg text-slate-900">Recent Bookings</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-500 text-sm">No recent bookings to display.</p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg text-slate-900">Next Steps</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${stats.services_count > 0 ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <span className={stats.services_count > 0 ? 'text-slate-900 font-medium' : 'text-slate-500'}>Add your first service</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-400">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <span className="text-slate-500">Set your availability</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-400">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <span className="text-slate-500">Upload portfolio images</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProviderLayout>
    );
}
