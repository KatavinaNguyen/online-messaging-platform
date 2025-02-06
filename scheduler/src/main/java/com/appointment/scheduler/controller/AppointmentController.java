package com.appointment.scheduler.controller;

import com.appointment.scheduler.model.Appointment;
import com.appointment.scheduler.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<String> scheduleAppointment(@RequestBody Appointment appointment) {
        appointmentService.schedule(appointment);
        return ResponseEntity.ok("Appointment scheduled successfully!");
    }

    @GetMapping
    public List<Appointment> getAppointments() {
        return appointmentService.getAll();
    }
}
