package com.example.zshop.Controller;

import com.example.zshop.DTO.ProductCategoryDTO;
import com.example.zshop.Models.ProductCategory;
import com.example.zshop.Service.ProductCategoryService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@SecurityRequirement(name = "jwt")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService categoryService;

    // Create a new category
    @PostMapping
    public ResponseEntity<ProductCategoryDTO> createCategory(@RequestBody ProductCategory category) {
        return ResponseEntity.ok( categoryService.createCategory(category));
    }

    // Update an existing category
    @PutMapping("/{id}")
    public ResponseEntity<ProductCategoryDTO> updateCategory(@PathVariable Long id, @RequestBody ProductCategory updatedCategory) {
        return ResponseEntity.ok( categoryService.updateCategory(id, updatedCategory));
    }

    // Get all categories
    @GetMapping
    public ResponseEntity<List<ProductCategoryDTO>> getAllCategories() {
        return  ResponseEntity.ok(  categoryService.getAllCategories());

    }

    // Get category by ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductCategoryDTO> getCategoryById(@PathVariable Long id) {
        return ResponseEntity.ok( categoryService.getCategoryById(id));
    }

    // Delete a category by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<ProductCategoryDTO> deleteCategory(@PathVariable Long id) {
       return ResponseEntity.ok(categoryService.deleteCategory(id));
    }

//    // Add products to a category by a list of product IDs
//    @PostMapping("/{id}/products")
//    public ProductCategory addProductsToCategory(@PathVariable Long id, @RequestBody List<Long> productIds) {
//        return categoryService.addProductsToCategory(id, productIds);
//    }
}
