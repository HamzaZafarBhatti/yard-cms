import { Link } from '@inertiajs/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Button } from '@/Components/ui/button';
import { Leaf, LayoutDashboard, Calendar, CalendarDays, Briefcase, Settings, LogOut } from 'lucide-react';

export default function ProviderLayout({ user, header, children }) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 w-full border-b bg-white">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                            <div className="bg-green-600 text-white p-1.5 rounded-lg shadow-sm">
                                <Leaf className="h-5 w-5" />
                            </div>
                            <span className="font-bold text-lg hidden sm:inline-block">Provider Portal</span>
                        </Link>
                        
                        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 ml-4">
                            <Link href={route('provider.dashboard')} className="hover:text-green-600 flex items-center gap-2 transition-colors">
                                <LayoutDashboard className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link href="#" className="hover:text-green-600 flex items-center gap-2 transition-colors">
                                <Briefcase className="h-4 w-4" />
                                My Services
                            </Link>
                            <Link href="#" className="hover:text-green-600 flex items-center gap-2 transition-colors">
                                <CalendarDays className="h-4 w-4" />
                                Availability
                            </Link>
                            <Link href="#" className="hover:text-green-600 flex items-center gap-2 transition-colors">
                                <Calendar className="h-4 w-4" />
                                Bookings
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-9 w-9 rounded-full focus-visible:ring-green-500">
                                    <Avatar className="h-9 w-9 border border-slate-200">
                                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name || 'Provider'}`} alt={user?.name || 'Provider'} />
                                        <AvatarFallback>{user?.name?.charAt(0) || 'P'}</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none text-slate-900">{user?.name || 'Provider User'}</p>
                                        <p className="text-xs leading-none text-slate-500">
                                            {user?.email || 'provider@example.com'}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={route('profile.edit')} className="w-full cursor-pointer flex items-center focus:bg-slate-100">
                                        <Settings className="mr-2 h-4 w-4 text-slate-500" />
                                        Profile Settings
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={route('logout')} method="post" as="button" className="w-full cursor-pointer flex items-center text-red-600 focus:bg-red-50 focus:text-red-700">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Log out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>

            {/* Page Header */}
            {header && (
                <div className="bg-white border-b shadow-sm">
                    <div className="container mx-auto px-4 md:px-8 py-6">
                        {header}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1">
                <div className="container mx-auto px-4 md:px-8 py-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
