package com.example.zshop.Controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SecurityRequirement(name = "jwt")  // Apply to the entire controller
@RequestMapping("/home")
public class HomeController {
        @GetMapping("/hello")
        public String hello(){
            return "Hello! Welcome to ZShop";
        }
}
