import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { Leaf, Store } from 'lucide-react';
import { Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        business_name: '',
        description: '',
        city: '',
        postcode: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('provider.register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <Head title="Provider Registration" />

            <div className="sm:mx-auto sm:w-full sm:max-w-xl">
                <Link href="/" className="flex justify-center items-center gap-2 mb-6 hover:opacity-80 transition">
                    <div className="bg-green-600 text-white p-2 rounded-xl shadow-sm">
                        <Leaf className="h-8 w-8" />
                    </div>
                    <span className="font-bold text-2xl text-slate-900">WorkYarder</span>
                </Link>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                    <CardHeader className="bg-white border-b border-slate-100 pb-6 text-center">
                        <div className="mx-auto bg-green-50 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                            <Store className="h-6 w-6 text-green-600" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-slate-900">Become a Provider</CardTitle>
                        <CardDescription className="text-slate-500 text-base">
                            Join our platform and offer your services to customers across the UK.
                        </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-6">
                        <form onSubmit={submit} className="space-y-6">
                            
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-slate-900 border-b pb-2">Account Details</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            className="mt-1"
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1"
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.email} className="mt-2" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.password} className="mt-2" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="password_confirmation" className="text-sm font-medium text-slate-700">Confirm Password</label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-1"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.password_confirmation} className="mt-2" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <h3 className="text-lg font-medium text-slate-900 border-b pb-2">Business Details</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="business_name" className="text-sm font-medium text-slate-700">Business Name</label>
                                        <Input
                                            id="business_name"
                                            name="business_name"
                                            value={data.business_name}
                                            className="mt-1"
                                            onChange={(e) => setData('business_name', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.business_name} className="mt-2" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={data.phone}
                                            className="mt-1"
                                            onChange={(e) => setData('phone', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.phone} className="mt-2" />
                                    </div>
                                    
                                    <div className="space-y-2 md:col-span-2">
                                        <label htmlFor="description" className="text-sm font-medium text-slate-700">Business Description</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={data.description}
                                            className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                                            onChange={(e) => setData('description', e.target.value)}
                                            required
                                            rows="3"
                                        />
                                        <InputError message={errors.description} className="mt-2" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="city" className="text-sm font-medium text-slate-700">City / Town</label>
                                        <Input
                                            id="city"
                                            name="city"
                                            value={data.city}
                                            className="mt-1"
                                            onChange={(e) => setData('city', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.city} className="mt-2" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="postcode" className="text-sm font-medium text-slate-700">Postcode</label>
                                        <Input
                                            id="postcode"
                                            name="postcode"
                                            value={data.postcode}
                                            className="mt-1"
                                            onChange={(e) => setData('postcode', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.postcode} className="mt-2" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-6">
                                <Button 
                                    type="submit" 
                                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl h-12 text-base font-medium"
                                    disabled={processing}
                                >
                                    Register as Provider
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                    
                    <CardFooter className="bg-slate-50 border-t border-slate-100 flex justify-center py-4">
                        <p className="text-sm text-slate-600">
                            Already have an account?{' '}
                            <Link href={route('login')} className="font-medium text-green-600 hover:text-green-500">
                                Log in
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
