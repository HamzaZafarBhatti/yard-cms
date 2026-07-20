<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('provider_id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->constrained('service_categories');
            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->string('short_description')->nullable();
            $table->decimal('price', 10, 2);
            $table->enum('price_type', ['fixed', 'hourly', 'starting_from'])->default('fixed');
            $table->unsignedInteger('duration_minutes');
            $table->boolean('is_active')->default(true);
            $table->string('featured_image')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->unique(['provider_id', 'slug']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
