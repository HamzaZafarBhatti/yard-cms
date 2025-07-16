<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenCare Pro | Professional Lawn Services</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
</head>

<body class="font-sans bg-gray-50">
    <!-- Navigation -->
    @include('frontend.partials.navbar')

    @yield('content')

    <!-- Footer -->
    @include('frontend.partials.footer')

    <script src="{{ asset('js/custom.js') }}"></script>
</body>

</html>
