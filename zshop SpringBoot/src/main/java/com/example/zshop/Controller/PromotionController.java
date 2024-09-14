package com.example.zshop.Controller;
import com.example.zshop.DTO.PromotionDTO;
import com.example.zshop.Models.Promotion;
import com.example.zshop.Services.PromotionService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/promotions")
@SecurityRequirement(name = "jwt")  // Apply to the entire controller
public class PromotionController {

    @Autowired
    private PromotionService promotionService;

    // Create a new promotion
    @PostMapping
    public PromotionDTO createPromotion(@RequestBody PromotionDTO promotionDTO) {
        return promotionService.savePromotion(promotionDTO);
    }

    // Update an existing promotion
    @PutMapping("/{id}")
    public PromotionDTO updatePromotion(@PathVariable Long id, @RequestBody PromotionDTO promotionDTO) {
        return promotionService.updatePromotion(id, promotionDTO);
    }

    // Add categories to an existing promotion
    @PostMapping("/{id}/categories")
    public PromotionDTO addCategoriesToPromotion(@PathVariable Long id, @RequestBody List<Long> categoryIds) {
        return promotionService.addCategoriesToPromotion(id, categoryIds);
    }
    @GetMapping("/{id}")
    public PromotionDTO getPromotionById(@PathVariable Long id) {
        return promotionService.getPromotionById(id);
    }
    @GetMapping
    public ResponseEntity<List<PromotionDTO>> getAllPromotions(){
        return ResponseEntity.ok(promotionService.getAllPromotions());
    }

    // Delete promotion by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<PromotionDTO> deletePromotion(@PathVariable Long id) {
      return  ResponseEntity.ok(promotionService.deletePromotion(id));
    }
}
