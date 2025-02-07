package com.appointment.scheduler.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/")
    public String home() {
        return "home"; // Render home.html
    }

    @GetMapping("/login")
    public String login() {
        return "login"; // Render login.html
    }
}
