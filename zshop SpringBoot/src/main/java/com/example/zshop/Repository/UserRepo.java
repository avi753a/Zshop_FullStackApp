package com.example.zshop.Repository;

import com.example.zshop.Models.UserPrinciple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserPrinciple,Long> {

    Optional<UserPrinciple> findByUsername(String username);

}
