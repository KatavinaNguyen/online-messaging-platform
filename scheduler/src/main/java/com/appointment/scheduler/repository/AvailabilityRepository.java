package com.appointment.scheduler.repository;

import com.appointment.scheduler.model.Availability;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
}
