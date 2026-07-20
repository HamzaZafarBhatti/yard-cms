import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import ProviderLayout from '@/Layouts/ProviderLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { PlusCircle, Trash2, Clock } from 'lucide-react';
import { Input } from '@/Components/ui/input';

const DAYS = [
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
    { value: 0, label: 'Sunday' },
];

export default function Index({ timeSlots }) {
    // Initializing state with slots or empty array for each day
    const initialData = {};
    DAYS.forEach(day => {
        initialData[day.value] = timeSlots[day.value] && timeSlots[day.value].length > 0 
            ? timeSlots[day.value] 
            : [];
    });

    const { data, setData, put, processing, errors } = useForm({
        slots: initialData
    });

    const addSlot = (dayValue) => {
        const newSlots = { ...data.slots };
        newSlots[dayValue] = [...newSlots[dayValue], { start_time: '09:00', end_time: '17:00', is_available: true }];
        setData('slots', newSlots);
    };

    const removeSlot = (dayValue, index) => {
        const newSlots = { ...data.slots };
        newSlots[dayValue] = newSlots[dayValue].filter((_, i) => i !== index);
        setData('slots', newSlots);
    };

    const updateSlot = (dayValue, index, field, value) => {
        const newSlots = { ...data.slots };
        newSlots[dayValue][index][field] = value;
        setData('slots', newSlots);
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('provider.availability.update'));
    };

    return (
        <ProviderLayout>
            <Head title="My Availability" />
            
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Availability</h2>
                    <p className="text-slate-500">Set your weekly schedule and working hours.</p>
                </div>
                <Button onClick={submit} disabled={processing} className="bg-green-600 hover:bg-green-700">
                    Save Changes
                </Button>
            </div>

            <form onSubmit={submit}>
                <div className="space-y-6">
                    {DAYS.map((day) => {
                        const daySlots = data.slots[day.value];
                        const isActive = daySlots.length > 0;

                        return (
                            <Card key={day.value} className={`rounded-3xl shadow-sm border-l-4 ${isActive ? 'border-l-green-500' : 'border-l-slate-200'}`}>
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                                        <div className="md:w-1/4 flex flex-col justify-start">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="rounded border-slate-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 h-5 w-5 mr-3"
                                                    checked={isActive}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            addSlot(day.value);
                                                        } else {
                                                            const newSlots = { ...data.slots };
                                                            newSlots[day.value] = [];
                                                            setData('slots', newSlots);
                                                        }
                                                    }}
                                                />
                                                <span className={`text-lg font-semibold ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                                                    {day.label}
                                                </span>
                                            </div>
                                            {!isActive && <p className="text-sm text-slate-400 mt-1 ml-8">Unavailable</p>}
                                        </div>

                                        <div className="md:w-3/4 space-y-3">
                                            {isActive && daySlots.map((slot, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                                        <Clock className="h-4 w-4 text-slate-400" />
                                                        <Input
                                                            type="time"
                                                            value={slot.start_time}
                                                            onChange={(e) => updateSlot(day.value, index, 'start_time', e.target.value)}
                                                            className="w-auto h-8 border-none bg-transparent shadow-none px-2 focus-visible:ring-0"
                                                        />
                                                        <span className="text-slate-400">-</span>
                                                        <Input
                                                            type="time"
                                                            value={slot.end_time}
                                                            onChange={(e) => updateSlot(day.value, index, 'end_time', e.target.value)}
                                                            className="w-auto h-8 border-none bg-transparent shadow-none px-2 focus-visible:ring-0"
                                                        />
                                                    </div>
                                                    
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        className="text-red-400 hover:text-red-600 hover:bg-red-50"
                                                        onClick={() => removeSlot(day.value, index)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}

                                            {isActive && (
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-green-600 hover:text-green-700 hover:bg-green-50 mt-2"
                                                    onClick={() => addSlot(day.value)}
                                                >
                                                    <PlusCircle className="h-4 w-4 mr-2" />
                                                    Add another slot
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </form>
        </ProviderLayout>
    );
}
