import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="WorkYarder UK - Smart Property Maintenance" />
            <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden relative">
                
                {/* Background decorative blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
                <div className="absolute top-[0%] right-[-10%] w-[40rem] h-[40rem] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[20%] w-[40rem] h-[40rem] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>

                <div className="relative z-10">
                    {/* Header */}
                    <header className="container mx-auto px-6 py-6 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="bg-purple-600 text-white p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">WorkYarder <span className="text-purple-600 text-sm align-top">UK</span></span>
                        </div>
                        
                        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                            <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
                            <a href="#how-it-works" className="hover:text-purple-600 transition-colors">How it works</a>
                            <a href="#reviews" className="hover:text-purple-600 transition-colors">Reviews</a>
                        </nav>

                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-700 hover:shadow-purple-500/50"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </header>

                    {/* Hero Section */}
                    <section className="container mx-auto px-6 pt-20 pb-32 text-center max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Work Smarter,</span><br/>
                            <span className="text-purple-600">Not Harder</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Transform your property maintenance with intelligent, professional services tailored to your lifestyle. Servicing the UK.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href={route('register')} className="w-full sm:w-auto rounded-full bg-purple-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-500/30 transition hover:bg-purple-700 hover:-translate-y-1">
                                Get Started Free
                            </Link>
                            <Link href={route('register')} className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-base font-bold text-slate-800 shadow-xl shadow-slate-200 transition hover:bg-slate-50 hover:-translate-y-1 flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                Book Now
                            </Link>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section id="features" className="bg-slate-100 py-24 relative z-20 shadow-inner">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <span className="text-purple-600 font-bold tracking-wider text-sm uppercase bg-purple-100 px-3 py-1 rounded-full">Our Services</span>
                                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">Everything Your Home Needs</h2>
                                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Professional services tailored to keep your property in perfect condition across the UK.</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {/* Service 1 */}
                                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all border border-slate-100 group">
                                    <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Housekeeping</h3>
                                    <p className="text-slate-500 mb-6 text-sm">Keep your property spotless with reliable domestic cleaners on your schedule.</p>
                                    <ul className="space-y-3 mb-8 text-sm font-medium text-slate-700">
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Vetted, trusted cleaners</li>
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Weekly & deep-cleaning options</li>
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Eco-friendly products used</li>
                                    </ul>
                                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">Starting at</span>
                                        <span className="text-lg font-bold text-blue-600">£45</span>
                                    </div>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all border border-slate-100 group relative transform md:-translate-y-4">
                                    <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent opacity-50 rounded-3xl pointer-events-none"></div>
                                    <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform relative z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Garden Care</h3>
                                    <p className="text-slate-500 mb-6 text-sm relative z-10">Transform your outdoor space with regular and seasonal landscaping services.</p>
                                    <ul className="space-y-3 mb-8 text-sm font-medium text-slate-700 relative z-10">
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Clear, tiered pricing plans</li>
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Mowing & landscaping experts</li>
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Seasonal clearance packages</li>
                                    </ul>
                                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center relative z-10">
                                        <span className="text-slate-500 text-sm">Starting at</span>
                                        <span className="text-lg font-bold text-green-600">£35</span>
                                    </div>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all border border-slate-100 group">
                                    <div className="bg-cyan-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Maintenance</h3>
                                    <p className="text-slate-500 mb-6 text-sm">Expert tradespeople for those essential repairs and property upkeep jobs.</p>
                                    <ul className="space-y-3 mb-8 text-sm font-medium text-slate-700">
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Fully qualified tradespeople</li>
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Scheduled check-ups available</li>
                                        <li className="flex items-center gap-2"><svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Emergency call-outs</li>
                                    </ul>
                                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">Starting at</span>
                                        <span className="text-lg font-bold text-cyan-600">£60</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Steps Section */}
                    <section id="how-it-works" className="py-24 bg-white relative">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <span className="text-pink-600 font-bold tracking-wider text-sm uppercase bg-pink-100 px-3 py-1 rounded-full">How it works</span>
                                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">Get Started in 3 Easy Steps</h2>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
                                <div className="text-center flex-1">
                                    <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg shadow-purple-500/40 border-4 border-purple-200">1</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Enter Details</h3>
                                    <p className="text-slate-500 text-sm">Provide your property address and contact details securely to let us assess your needs.</p>
                                </div>
                                <div className="hidden md:block w-16 h-1 bg-slate-200 rounded"></div>
                                <div className="text-center flex-1">
                                    <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg shadow-purple-500/40 border-4 border-purple-200">2</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Select Service</h3>
                                    <p className="text-slate-500 text-sm">Choose from our range of professional home services, customized to fit your requirements.</p>
                                </div>
                                <div className="hidden md:block w-16 h-1 bg-slate-200 rounded"></div>
                                <div className="text-center flex-1">
                                    <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg shadow-purple-500/40 border-4 border-purple-200">3</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Book & Relax</h3>
                                    <p className="text-slate-500 text-sm">Schedule your service and let our vetted professionals handle the hard work.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section id="reviews" className="py-24 bg-slate-50">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <span className="text-red-500 font-bold tracking-wider text-sm uppercase bg-red-100 px-3 py-1 rounded-full">Testimonials</span>
                                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">Loved by Thousands</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {/* Review 1 */}
                                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                                    <div className="flex text-yellow-400 mb-4 gap-1">
                                        {[1,2,3,4,5].map(i => (
                                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-600 mb-6 italic">"WorkYarder has absolutely transformed my property. The housekeeping service is unmatched and saves me hours every week."</p>
                                    <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">SJ</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Sarah Johnson</h4>
                                            <p className="text-slate-500 text-xs">London, UK</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Review 2 */}
                                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                                    <div className="flex text-yellow-400 mb-4 gap-1">
                                        {[1,2,3,4,5].map(i => (
                                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-600 mb-6 italic">"Our garden looks incredible. The professional landscape team is punctual, knowledgeable, and completely reliable."</p>
                                    <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">AC</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Alex Chen</h4>
                                            <p className="text-slate-500 text-xs">Manchester, UK</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Review 3 */}
                                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                                    <div className="flex text-yellow-400 mb-4 gap-1">
                                        {[1,2,3,4,5].map(i => (
                                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-600 mb-6 italic">"Booking tradespeople was always a headache before WorkYarder. Now it's just a few clicks and peace of mind."</p>
                                    <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                                        <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">ER</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Emily Rodriguez</h4>
                                            <p className="text-slate-500 text-xs">Birmingham, UK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"></div>
                        
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-4">Book Your Service Now</h2>
                                    <p className="text-slate-500">Get started with our easy booking process</p>
                                </div>
                                
                                <div className="flex justify-between items-center mb-10 max-w-2xl mx-auto relative px-4">
                                    <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-100 -z-10"></div>
                                    
                                    <div className="flex flex-col items-center gap-2 bg-white px-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold ring-4 ring-blue-50">1</div>
                                        <span className="text-xs font-bold text-blue-600">Address</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 bg-white px-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold">2</div>
                                        <span className="text-xs font-medium text-slate-400">Services</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 bg-white px-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold">3</div>
                                        <span className="text-xs font-medium text-slate-400">Details</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 bg-white px-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold">4</div>
                                        <span className="text-xs font-medium text-slate-400">Booking</span>
                                    </div>
                                </div>

                                <div className="text-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mx-auto mb-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="font-bold text-slate-900">Enter Your Property Address</h3>
                                    <p className="text-sm text-slate-500">Where would you like service?</p>
                                </div>

                                <form className="max-w-xl mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = route('register'); }}>
                                    <input type="text" placeholder="Street Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                                    <div className="grid grid-cols-3 gap-4">
                                        <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                                        <input type="text" placeholder="County" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                                        <input type="text" placeholder="Postcode" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                                    </div>
                                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                                        Next Step
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
                        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                            <div className="col-span-2 md:col-span-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-purple-600 text-white p-1.5 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-bold text-white">WorkYarder UK</span>
                                </div>
                                <p className="text-sm">Intelligent property maintenance. Professional home services tailored to your lifestyle.</p>
                            </div>
                            
                            <div>
                                <h4 className="text-white font-bold mb-4">Services</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="hover:text-purple-400 transition">Housekeeping</a></li>
                                    <li><a href="#" className="hover:text-purple-400 transition">Garden Care</a></li>
                                    <li><a href="#" className="hover:text-purple-400 transition">Maintenance</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-white font-bold mb-4">Company</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
                                    <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
                                    <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-white font-bold mb-4">Legal</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-purple-400 transition">Terms of Service</a></li>
                                    <li><a href="#" className="hover:text-purple-400 transition">Cookie Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="container mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm">© {new Date().getFullYear()} WorkYarder UK. All rights reserved.</p>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-white transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="hover:text-white transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                </a>
                                <a href="#" className="hover:text-white transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            
            <style jsx>{`
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
        </>
    );
}
