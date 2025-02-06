package com.appointment.scheduler.controller;

import com.appointment.scheduler.model.Availability;
import com.appointment.scheduler.service.AvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/availability")
public class AvailabilityController {
    @Autowired
    private AvailabilityService availabilityService;

    @PostMapping
    public ResponseEntity<String> setAvailability(@RequestBody Availability availability) {
        availabilityService.setAvailability(availability);
        return ResponseEntity.ok("Availability set successfully!");
    }

    @GetMapping("/{userId}")
    public List<Availability> getAvailability(@PathVariable Long userId) {
        return availabilityService.getAvailabilityForUser(userId);
    }
}
