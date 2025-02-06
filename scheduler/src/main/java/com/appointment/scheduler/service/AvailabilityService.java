package com.appointment.scheduler.service;

import com.appointment.scheduler.model.Availability;
import com.appointment.scheduler.repository.AvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvailabilityService {
    @Autowired
    private AvailabilityRepository availabilityRepository;

    public Availability setAvailability(Availability availability) {
        return availabilityRepository.save(availability);
    }

    public List<Availability> getAvailabilityForUser(Long userId) {
        return availabilityRepository.findAll(); // Add filtering logic for userId if needed
    }
}
