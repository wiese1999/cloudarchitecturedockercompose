package com.example.cloudarchitecturedockercompose;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/greetings")
public class GreetingController {

    @Autowired
    private GreetingRepository greetingRepository;

    @GetMapping
    public List<GreetingEntity> getAllGreetings() {
        return greetingRepository.findAll();
    }

    @PostMapping
    public GreetingEntity addGreeting(@RequestBody GreetingEntity greeting) {
        return greetingRepository.save(greeting);
    }
}
