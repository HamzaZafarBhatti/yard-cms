<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PendingApprovalController extends Controller
{
    public function index(Request $request)
    {
        // If they are already approved, redirect them to dashboard
        if ($request->user() && $request->user()->provider && $request->user()->provider->status === 'approved') {
            return redirect()->route('provider.dashboard');
        }

        return Inertia::render('Provider/PendingApproval');
    }
}
