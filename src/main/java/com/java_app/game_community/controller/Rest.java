package com.java_app.game_community.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Rest {

    @GetMapping("/test")
    public String hello() {
        return "Hello from Spring Boot!";
    }
    @PostMapping("/api")
    public String api(){
        return "api test";
    }
}