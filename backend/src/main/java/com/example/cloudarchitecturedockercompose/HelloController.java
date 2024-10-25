package com.example.cloudarchitecturedockercompose;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/message")
    public String message() {
        return "Hello from Spring Boot with PostgreSQL!";
    }
}
