package com.example.zshop.Controller;

import com.example.zshop.DTO.AuthorityRequest;
import com.example.zshop.DTO.AuthorityUserAssignment;
import com.example.zshop.Models.Authority;
import com.example.zshop.Service.AuthorityService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authorities")
@SecurityRequirement(name = "jwt")  // Apply to the entire controller

public class AuthorityController {
    @Autowired
    private AuthorityService authorityService;

    @PostMapping
    public ResponseEntity<?> createAuthority(@RequestBody AuthorityRequest authorityRequest){
        return ResponseEntity.ok(authorityService.createAuthority(authorityRequest));
    }
//    @PreAuthorize("hasRole(\"admin\")")  // Only allow users with 'ADMIN' role to access
    @GetMapping
    public ResponseEntity<?>  viewAllAuthorities(){
        return ResponseEntity.ok(authorityService.getAllAuthorities());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Authority> deleteAuthority(@PathVariable long id){
        return ResponseEntity.ok(authorityService.deleteAuthority(id));
    }
    @PostMapping("/addusers")
    private ResponseEntity<?> addUserstoAuthority(@RequestBody AuthorityUserAssignment authorityUserAssignment){
        return ResponseEntity.ok(authorityService.addUsersToAuthority(authorityUserAssignment));
    }


}
