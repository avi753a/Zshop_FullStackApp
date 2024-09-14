package com.example.zshop.Repository;

import com.example.zshop.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product,Long> {
    Optional<Product> findByName(String name);
}
