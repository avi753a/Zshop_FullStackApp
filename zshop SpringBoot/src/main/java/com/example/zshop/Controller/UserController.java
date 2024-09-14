package com.example.zshop.Controller;

import com.example.zshop.DTO.UserSummaryDTO;
import com.example.zshop.Models.UserPrinciple;
import com.example.zshop.Service.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@SecurityRequirement(name = "jwt")  // Apply to the entire controller

public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping
    public ResponseEntity<List<UserSummaryDTO>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }
    @DeleteMapping("{id}")
    public ResponseEntity<UserPrinciple> deleteUser(@PathVariable long id){
        return ResponseEntity.ok(userService.deleteUser(id));

    }
}
