import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Users, TrendingUp, CreditCard, Activity, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';

export default function Dashboard({ auth }) {
    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Dashboard Overview
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-64 pl-9 bg-white focus-visible:ring-green-500"
                            />
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700 shadow-md">Download Report</Button>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="flex-1 space-y-6 mt-2">
                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Total Revenue
                            </CardTitle>
                            <TrendingUp className="h-4 w-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">£45,231.89</div>
                            <p className="text-xs text-green-600 mt-1 font-medium">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Active Customers
                            </CardTitle>
                            <Users className="h-4 w-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">+2,350</div>
                            <p className="text-xs text-green-600 mt-1 font-medium">
                                +180 new customers this month
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">Sales</CardTitle>
                            <CreditCard className="h-4 w-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">+12,234</div>
                            <p className="text-xs text-green-600 mt-1 font-medium">
                                +19% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Active Bookings
                            </CardTitle>
                            <Activity className="h-4 w-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">+573</div>
                            <p className="text-xs text-green-600 mt-1 font-medium">
                                +201 since last hour
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4 shadow-sm border-slate-200">
                        <CardHeader>
                            <CardTitle className="text-lg">Revenue Overview</CardTitle>
                            <CardDescription>
                                Monthly revenue performance across all services.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="h-[350px] flex items-center justify-center bg-slate-50/50 m-6 rounded-lg border border-dashed border-slate-200 mt-0">
                            <div className="text-center">
                                <Activity className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                                <p className="text-slate-500 text-sm font-medium">Chart visualization will appear here</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-3 shadow-sm border-slate-200">
                        <CardHeader>
                            <CardTitle className="text-lg">Recent Bookings</CardTitle>
                            <CardDescription>
                                You have 4 new service requests today.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {[
                                    { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+£1,999.00', service: 'Full Renovation' },
                                    { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+£39.00', service: 'Housekeeping' },
                                    { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+£299.00', service: 'Landscaping' },
                                    { name: 'William Kim', email: 'will@email.com', amount: '+£99.00', service: 'Maintenance' },
                                ].map((item, i) => (
                                    <div className="flex items-center" key={i}>
                                        <Avatar className="h-10 w-10 border border-slate-100 shadow-sm">
                                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}`} alt="Avatar" />
                                            <AvatarFallback className="bg-green-50 text-green-700">{item.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-semibold leading-none text-slate-900">{item.name}</p>
                                            <p className="text-xs text-slate-500">
                                                {item.service}
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium text-sm text-slate-900">{item.amount}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
