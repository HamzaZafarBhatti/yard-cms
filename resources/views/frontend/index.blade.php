@extends('frontend.partials.app')

@section('content')
    <!-- Hero Slider Section -->
    <section id="home" class="relative bg-green-50 overflow-hidden">
        <div class="hero-slider">
            <!-- Slide 1 -->
            <div class="hero-slide active">
                <div class="container mx-auto px-6 py-16 md:py-24">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                                Professional <span class="text-green-600">Lawn Mowing</span> Services
                            </h1>
                            <p class="text-lg text-gray-600 mb-8">
                                Keep your lawn perfectly trimmed with our expert mowing services. We use professional
                                equipment for a clean, even cut every time.
                            </p>
                            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="#contact"
                                    class="bg-green-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-green-700 transition duration-300">
                                    Get a Free Quote
                                </a>
                                <a href="#services"
                                    class="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg text-center font-medium hover:bg-green-50 transition duration-300">
                                    Our Services
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 animate-fadeIn delay-200">
                            <img src="https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Lawn mowing" class="rounded-lg shadow-xl w-full h-auto object-cover">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2 -->
            <div class="hero-slide">
                <div class="container mx-auto px-6 py-16 md:py-24">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                                Expert <span class="text-green-600">Fertilization</span> Services
                            </h1>
                            <p class="text-lg text-gray-600 mb-8">
                                Give your lawn the nutrients it needs with our customized fertilization programs for
                                lush, green growth all season long.
                            </p>
                            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="#contact"
                                    class="bg-green-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-green-700 transition duration-300">
                                    Get a Free Quote
                                </a>
                                <a href="#services"
                                    class="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg text-center font-medium hover:bg-green-50 transition duration-300">
                                    Our Services
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 animate-fadeIn delay-200">
                            <img src="https://images.unsplash.com/photo-1597843786271-1027c561c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Fertilization" class="rounded-lg shadow-xl w-full h-auto object-cover">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 3 -->
            <div class="hero-slide">
                <div class="container mx-auto px-6 py-16 md:py-24">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                                Complete <span class="text-green-600">Lawn Renovation</span>
                            </h1>
                            <p class="text-lg text-gray-600 mb-8">
                                Transform your tired lawn into a lush, green paradise with our comprehensive renovation
                                services.
                            </p>
                            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="#contact"
                                    class="bg-green-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-green-700 transition duration-300">
                                    Get a Free Quote
                                </a>
                                <a href="#services"
                                    class="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg text-center font-medium hover:bg-green-50 transition duration-300">
                                    Our Services
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 animate-fadeIn delay-200">
                            <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Lawn renovation" class="rounded-lg shadow-xl w-full h-auto object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slider Controls -->
        <div class="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
            <button class="slider-dot w-3 h-3 rounded-full bg-green-600 opacity-50 focus:outline-none"
                data-slide="0"></button>
            <button class="slider-dot w-3 h-3 rounded-full bg-green-600 opacity-50 focus:outline-none"
                data-slide="1"></button>
            <button class="slider-dot w-3 h-3 rounded-full bg-green-600 opacity-50 focus:outline-none"
                data-slide="2"></button>
        </div>

        <!-- Navigation Arrows -->
        <button
            class="slider-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-green-600 z-10 focus:outline-none">
            <i class="fas fa-chevron-left text-xl"></i>
        </button>
        <button
            class="slider-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-green-600 z-10 focus:outline-none">
            <i class="fas fa-chevron-right text-xl"></i>
        </button>
    </section>

    <!-- Stats Section -->
    <section class="bg-white py-12">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div class="animate-fadeIn delay-100">
                    <div class="text-4xl font-bold text-green-600 mb-2">500+</div>
                    <div class="text-gray-600">Happy Clients</div>
                </div>
                <div class="animate-fadeIn delay-200">
                    <div class="text-4xl font-bold text-green-600 mb-2">10+</div>
                    <div class="text-gray-600">Years Experience</div>
                </div>
                <div class="animate-fadeIn delay-300">
                    <div class="text-4xl font-bold text-green-600 mb-2">100%</div>
                    <div class="text-gray-600">Satisfaction</div>
                </div>
                <div class="animate-fadeIn delay-400">
                    <div class="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <div class="text-gray-600">Support</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12 animate-fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    We offer a comprehensive range of lawn care services to keep your outdoor space looking its best all
                    year round.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden service-card animate-fadeIn delay-100">
                    <div class="h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Lawn Mowing" class="w-full h-full object-cover transition duration-500 hover:scale-110">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="fas fa-cut text-green-600 text-2xl mr-3"></i>
                            <h3 class="text-xl font-bold text-gray-800">Lawn Mowing</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Professional lawn mowing services to keep your grass at the perfect height for healthy
                            growth and a manicured look.
                        </p>
                        <a href="#contact" class="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden service-card animate-fadeIn delay-200">
                    <div class="h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1597843786271-1027c561c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Fertilizing" class="w-full h-full object-cover transition duration-500 hover:scale-110">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="fas fa-seedling text-green-600 text-2xl mr-3"></i>
                            <h3 class="text-xl font-bold text-gray-800">Fertilizing</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Customized fertilization programs to provide essential nutrients for lush, green, and
                            healthy grass throughout the seasons.
                        </p>
                        <a href="#contact"
                            class="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden service-card animate-fadeIn delay-300">
                    <div class="h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Weed Control" class="w-full h-full object-cover transition duration-500 hover:scale-110">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="fas fa-spray-can text-green-600 text-2xl mr-3"></i>
                            <h3 class="text-xl font-bold text-gray-800">Weed Control</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Effective weed prevention and elimination treatments to maintain a pristine lawn free from
                            unsightly invaders.
                        </p>
                        <a href="#contact"
                            class="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 4 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden service-card animate-fadeIn delay-100">
                    <div class="h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                            alt="Aeration" class="w-full h-full object-cover transition duration-500 hover:scale-110">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="fas fa-fan text-green-600 text-2xl mr-3"></i>
                            <h3 class="text-xl font-bold text-gray-800">Aeration</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Core aeration services to relieve soil compaction, improve root growth, and enhance water
                            and nutrient absorption.
                        </p>
                        <a href="#contact"
                            class="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 5 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden service-card animate-fadeIn delay-200">
                    <div class="h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Lawn Renovation"
                            class="w-full h-full object-cover transition duration-500 hover:scale-110">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="fas fa-home text-green-600 text-2xl mr-3"></i>
                            <h3 class="text-xl font-bold text-gray-800">Lawn Renovation</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Complete lawn makeovers including grading, seeding, sodding, and irrigation to transform
                            your outdoor space.
                        </p>
                        <a href="#contact"
                            class="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 6 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden service-card animate-fadeIn delay-300">
                    <div class="h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                            alt="Seasonal Cleanup"
                            class="w-full h-full object-cover transition duration-500 hover:scale-110">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="fas fa-calendar-alt text-green-600 text-2xl mr-3"></i>
                            <h3 class="text-xl font-bold text-gray-800">Seasonal Cleanup</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Spring and fall cleanup services including leaf removal, debris clearing, and garden bed
                            preparation.
                        </p>
                        <a href="#contact"
                            class="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                    <img src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Our team" class="rounded-lg shadow-xl w-full h-auto object-cover">
                </div>
                <div class="md:w-1/2 md:pl-12 animate-fadeIn delay-200">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About GreenCare Pro</h2>
                    <p class="text-gray-600 mb-4">
                        Founded in 2012, GreenCare Pro has grown from a small local business to the region's most
                        trusted lawn care service provider. Our mission is simple: to deliver exceptional lawn care
                        services with unmatched professionalism and attention to detail.
                    </p>
                    <p class="text-gray-600 mb-6">
                        Our team of certified lawn care specialists combines years of experience with the latest
                        industry knowledge and techniques. We take pride in our work and treat every lawn as if it were
                        our own.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 text-xl mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-gray-800">Certified Professionals</h4>
                                <p class="text-gray-600">All our technicians are fully trained and certified in lawn
                                    care best practices.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 text-xl mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-gray-800">Eco-Friendly Approach</h4>
                                <p class="text-gray-600">We use environmentally responsible products and methods
                                    whenever possible.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 text-xl mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-gray-800">Customer Satisfaction</h4>
                                <p class="text-gray-600">Your satisfaction is our top priority. We stand behind all our
                                    work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12 animate-fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Don't just take our word for it. Here's what our satisfied customers have to say about our services.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white p-6 rounded-xl shadow-md testimonial-card animate-fadeIn delay-100">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson"
                                class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800">Sarah Johnson</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">
                        "GreenCare Pro transformed my struggling lawn into the envy of the neighborhood. Their
                        fertilization program worked wonders and their team is always punctual and professional. Highly
                        recommend!"
                    </p>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-white p-6 rounded-xl shadow-md testimonial-card animate-fadeIn delay-200">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Michael Thompson"
                                class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800">Michael Thompson</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">
                        "I've tried several lawn care companies over the years, but none compare to GreenCare Pro. Their
                        attention to detail and consistent results keep me coming back season after season."
                    </p>
                </div>

                <!-- Testimonial 3 -->
                <div class="bg-white p-6 rounded-xl shadow-md testimonial-card animate-fadeIn delay-300">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Rodriguez"
                                class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800">Emily Rodriguez</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">
                        "The lawn renovation service was worth every penny. My yard went from patchy and brown to lush
                        and green in just a few weeks. The team was professional and cleaned up perfectly after each
                        visit."
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 cta-gradient text-white">
        <div class="container mx-auto px-6 text-center">
            <div class="max-w-3xl mx-auto animate-fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Lawn?</h2>
                <p class="text-lg mb-8 opacity-90">
                    Get started with a free, no-obligation quote today. Our team will assess your lawn and recommend the
                    perfect care plan for your needs.
                </p>
                <a href="#contact"
                    class="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition duration-300 inline-block">
                    Get Your Free Quote
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
                    <p class="text-gray-600 mb-8">
                        Have questions about our services or ready to schedule an appointment? Fill out the form and
                        we'll get back to you within 24 hours.
                    </p>

                    <div class="space-y-6">
                        <div class="flex items-start">
                            <i class="fas fa-map-marker-alt text-green-600 text-xl mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-bold text-gray-800">Our Location</h4>
                                <p class="text-gray-600">123 Green Street, Lawnville, LV 12345</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-phone-alt text-green-600 text-xl mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-bold text-gray-800">Call Us</h4>
                                <p class="text-gray-600">(123) 456-7890</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-envelope text-green-600 text-xl mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-bold text-gray-800">Email Us</h4>
                                <p class="text-gray-600">info@greencarepro.com</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-clock text-green-600 text-xl mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-bold text-gray-800">Working Hours</h4>
                                <p class="text-gray-600">Monday - Friday: 8am - 6pm</p>
                                <p class="text-gray-600">Saturday: 9am - 3pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:w-1/2 md:pl-12 animate-fadeIn delay-200">
                    <form class="bg-gray-50 p-8 rounded-xl shadow-md">
                        <div class="mb-6">
                            <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
                            <input type="text" id="name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input type="email" id="email"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </div>
                        <div class="mb-6">
                            <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input type="tel" id="phone"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </div>
                        <div class="mb-6">
                            <label for="service" class="block text-gray-700 font-medium mb-2">Service Interested
                                In</label>
                            <select id="service"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                                <option value="">Select a service</option>
                                <option value="mowing">Lawn Mowing</option>
                                <option value="fertilizing">Fertilizing</option>
                                <option value="weed-control">Weed Control</option>
                                <option value="aeration">Aeration</option>
                                <option value="renovation">Lawn Renovation</option>
                                <option value="cleanup">Seasonal Cleanup</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea id="message" rows="4"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                        </div>
                        <button type="submit"
                            class="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12 animate-fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Have questions? We've got answers. Here are some of the most common questions we receive.
                </p>
            </div>

            <div class="max-w-3xl mx-auto space-y-6">
                <!-- FAQ 1 -->
                <div class="bg-white p-6 rounded-xl shadow-md animate-fadeIn delay-100">
                    <button class="faq-toggle w-full flex justify-between items-center text-left">
                        <h3 class="font-bold text-gray-800 text-lg">How often should I mow my lawn?</h3>
                        <i class="fas fa-chevron-down text-green-600 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content mt-4 text-gray-600 hidden">
                        <p>
                            The frequency of mowing depends on grass type and growth rate, but as a general rule, you
                            should mow often enough that you're never removing more than 1/3 of the grass blade at a
                            time. For most lawns during peak growing season, this means mowing once a week.
                        </p>
                    </div>
                </div>

                <!-- FAQ 2 -->
                <div class="bg-white p-6 rounded-xl shadow-md animate-fadeIn delay-200">
                    <button class="faq-toggle w-full flex justify-between items-center text-left">
                        <h3 class="font-bold text-gray-800 text-lg">When is the best time to fertilize my lawn?</h3>
                        <i class="fas fa-chevron-down text-green-600 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content mt-4 text-gray-600 hidden">
                        <p>
                            The optimal fertilization schedule depends on your grass type. For cool-season grasses,
                            early fall is the most important time, followed by late spring. For warm-season grasses,
                            late spring through summer is ideal. We can create a customized fertilization plan based on
                            your specific lawn needs.
                        </p>
                    </div>
                </div>

                <!-- FAQ 3 -->
                <div class="bg-white p-6 rounded-xl shadow-md animate-fadeIn delay-300">
                    <button class="faq-toggle w-full flex justify-between items-center text-left">
                        <h3 class="font-bold text-gray-800 text-lg">Are your treatments safe for pets and children?
                        </h3>
                        <i class="fas fa-chevron-down text-green-600 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content mt-4 text-gray-600 hidden">
                        <p>
                            Yes, we prioritize the safety of your family and pets. We use products that are EPA-approved
                            for residential use and follow all label instructions carefully. We'll provide specific
                            guidance on when it's safe to re-enter treated areas after application.
                        </p>
                    </div>
                </div>

                <!-- FAQ 4 -->
                <div class="bg-white p-6 rounded-xl shadow-md animate-fadeIn delay-400">
                    <button class="faq-toggle w-full flex justify-between items-center text-left">
                        <h3 class="font-bold text-gray-800 text-lg">What's included in your lawn renovation service?
                        </h3>
                        <i class="fas fa-chevron-down text-green-600 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content mt-4 text-gray-600 hidden">
                        <p>
                            Our comprehensive lawn renovation typically includes soil testing, grading and leveling,
                            core aeration, overseeding or sod installation, starter fertilization, and irrigation setup
                            if needed. We'll assess your specific situation and recommend the best approach for your
                            lawn's needs.
                        </p>
                    </div>
                </div>

                <!-- FAQ 5 -->
                <div class="bg-white p-6 rounded-xl shadow-md animate-fadeIn delay-500">
                    <button class="faq-toggle w-full flex justify-between items-center text-left">
                        <h3 class="font-bold text-gray-800 text-lg">Do you offer any guarantees on your services?</h3>
                        <i class="fas fa-chevron-down text-green-600 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content mt-4 text-gray-600 hidden">
                        <p>
                            Absolutely! We stand behind all our work with a 100% satisfaction guarantee. If you're not
                            completely happy with our service, we'll make it right. Specific guarantees vary by service
                            - for example, our lawn renovation comes with a 90-day guarantee on new grass establishment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
