package com.example.zshop.Repository;

import com.example.zshop.Models.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductCategoryRepo extends JpaRepository<ProductCategory,Long> {
    Optional<ProductCategory> findByName(String name);
}
