import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/Components/ui/card';

export default function PendingApproval({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Account Pending Approval</h2>}
        >
            <Head title="Pending Approval" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome to WorkYarder UK, {auth.user.provider?.business_name}!</CardTitle>
                            <CardDescription>Your provider account is currently pending approval.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Thank you for registering as a provider. Our admin team is currently reviewing your account details.
                                Once your account is approved, you will be able to add services, manage your availability, and accept bookings.
                            </p>
                            <p className="text-gray-600 mt-4">
                                We will notify you via email as soon as your account status changes.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
