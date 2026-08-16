package com.bryan.capstone.capstoneproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.bryan.capstone.capstoneproject",
        "config",
        "controller",
        "dto",
        "model",
        "repository",
        "service"
})
public class CapstoneProjectApplication {
    public static void main(String[] args) {
        SpringApplication.run(CapstoneProjectApplication.class, args);
    }
}