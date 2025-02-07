import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const AppointmentBooking = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const appointmentTypes = [
    { id: 1, name: "Initial Screening", duration: "1 hour" },
    { id: 2, name: "Illness", duration: "30 minutes" },
    { id: 3, name: "Vaccination", duration: "45 minutes" },
    { id: 4, name: "Yearly Physical", duration: "1 hour" },
  ];

  const times = [
    "9:00 am", "9:30 am", "10:00 am", "10:30 am",
    "11:00 am", "11:30 am", "12:00 pm", "12:30 pm",
    "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm",
  ];

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select Appointment Type</h2>
        <div className="grid grid-cols-2 gap-4">
          {appointmentTypes.map((type) => (
            <Card
              key={type.id}
              className={`cursor-pointer p-4 ${
                selectedType === type ? "bg-green-100" : ""
              }`}
              onClick={() => handleTypeSelect(type)}
            >
              <CardContent>
                <p className="font-bold">{type.name}</p>
                <p className="text-sm text-gray-600">{type.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select Date</h2>
        <input
          type="date"
          className="w-full border rounded p-2"
          onChange={(e) => handleDateSelect(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select Time</h2>
        <div className="grid grid-cols-3 gap-4">
          {times.map((time, index) => (
            <Button
              key={index}
              className={selectedTime === time ? "bg-green-500 text-white" : ""}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={!selectedType || !selectedDate || !selectedTime}
        >
          Confirm Appointment
        </Button>
      </div>
    </div>
  );
};

export default AppointmentBooking;
