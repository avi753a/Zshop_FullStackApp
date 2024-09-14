package com.example.zshop.Repository;

import com.example.zshop.Models.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorityRepo extends JpaRepository<Authority,Long> {
    @Override
    Optional<Authority> findById(Long id);

    Optional<Authority> findByName(String name);
}
