<?php

namespace App\Filament\Admin\Pages;

use App\Models\Setting;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;

class SettingsPage extends Page implements HasForms
{
    use InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static ?string $navigationGroup = 'Settings';
    protected static string $view = 'filament.admin.pages.settings-page';
    protected static ?string $title = 'Platform Settings';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill([
            'platform_commission' => Setting::get('platform_commission', '10'),
            'stripe_enabled' => Setting::isEnabled('stripe_enabled'),
            'stripe_key' => Setting::get('stripe_key'),
            'stripe_secret' => Setting::get('stripe_secret'),
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('General')
                    ->schema([
                        TextInput::make('platform_commission')
                            ->label('Platform Commission (%)')
                            ->numeric()
                            ->required()
                            ->helperText('The percentage taken from each booking.'),
                    ]),

                Section::make('Payment Gateway (Stripe)')
                    ->schema([
                        Toggle::make('stripe_enabled')
                            ->label('Enable Stripe Payments')
                            ->helperText('If disabled, only offline/cash payments will be allowed.'),
                        TextInput::make('stripe_key')
                            ->label('Stripe Public Key'),
                        TextInput::make('stripe_secret')
                            ->label('Stripe Secret Key')
                            ->password(),
                    ]),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();

        Setting::set('platform_commission', $data['platform_commission']);
        Setting::set('stripe_enabled', $data['stripe_enabled'] ? '1' : '0');
        Setting::set('stripe_key', $data['stripe_key'] ?? '');
        Setting::set('stripe_secret', $data['stripe_secret'] ?? '');

        Notification::make()
            ->title('Settings updated successfully.')
            ->success()
            ->send();
    }
}
