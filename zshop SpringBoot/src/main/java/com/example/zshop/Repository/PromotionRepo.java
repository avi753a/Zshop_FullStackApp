package com.example.zshop.Repository;

import com.example.zshop.Models.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PromotionRepo extends JpaRepository<Promotion,Long> {
    Optional<Promotion> findByName(String name);
}
