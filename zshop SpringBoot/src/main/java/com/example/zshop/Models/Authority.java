package com.example.zshop.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "authorities")
@NoArgsConstructor
public class Authority implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String name;

    @Column
    private String description;

    @ManyToMany(mappedBy = "authorities",fetch = FetchType.EAGER)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private Set<UserPrinciple> users = new HashSet<>();

    public Authority(String authority) {
        this.name = authority;
    }

    // Helper method to add user
    public void addUser(UserPrinciple user) {
        this.users.add(user);
        user.getAuthorities().add(this);  // Update the other side
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<UserPrinciple> getUsers() {
        return users;
    }

    public void setUsers(Set<UserPrinciple> users) {
        this.users = users;
    }

    @Override
    public String getAuthority() {
        return this.name;
    }
}
