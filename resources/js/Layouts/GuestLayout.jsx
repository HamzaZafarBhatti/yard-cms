import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden relative flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
            {/* Background decorative blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
            <div className="absolute top-[0%] right-[-10%] w-[40rem] h-[40rem] bg-green-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-[40%] left-[20%] w-[40rem] h-[40rem] bg-lime-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 flex flex-col items-center w-full">
                <Link href="/" className="flex items-center gap-2 mb-8 hover:scale-105 transition-transform">
                    <div className="bg-green-600 text-white p-2 rounded-lg shadow-lg shadow-green-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <span className="text-3xl font-extrabold tracking-tight text-slate-900">WorkYarder <span className="text-green-600 text-xl align-top">UK</span></span>
                </Link>

                <div className="w-full overflow-hidden bg-white/80 backdrop-blur-sm px-8 py-8 shadow-2xl sm:max-w-md sm:rounded-[2rem] border border-white">
                    {children}
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}
