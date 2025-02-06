package com.appointment.scheduler.controller;

import com.appointment.scheduler.model.User;
import com.appointment.scheduler.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        userService.register(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        boolean isAuthenticated = userService.login(user.getEmail(), user.getPassword());
        return isAuthenticated ? ResponseEntity.ok("Login successful!") :
                ResponseEntity.status(401).body("Invalid credentials.");
    }
}
