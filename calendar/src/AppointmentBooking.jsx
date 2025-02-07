import React, { useState } from "react";
import "./AppointmentBooking.css";

const AppointmentBooking = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
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

  return (
    <div className="container">
      <h1>Book an Appointment</h1>

      {/* Appointment Types */}
      <div>
        <h2 className="section-title">Select Appointment Type</h2>
        <div className="cards-container">
          {appointmentTypes.map((type) => (
            <div
              key={type.id}
              className={`card ${selectedType === type.id ? "selected" : ""}`}
              onClick={() => setSelectedType(type.id)}
            >
              <p><strong>{type.name}</strong></p>
              <p>{type.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="calendar">
        <h2 className="section-title">Select Date</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Time Slots */}
      <div>
        <h2 className="section-title">Select Time</h2>
        <div className="time-grid">
          {times.map((time, index) => (
            <div
              key={index}
              className={`time-slot ${selectedTime === time ? "selected" : ""}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <button
        className="confirm-button"
        disabled={!selectedType || !selectedDate || !selectedTime}
        onClick={() => alert("Appointment Confirmed!")}
      >
        Confirm Appointment
      </button>
    </div>
  );
};

export default AppointmentBooking;
