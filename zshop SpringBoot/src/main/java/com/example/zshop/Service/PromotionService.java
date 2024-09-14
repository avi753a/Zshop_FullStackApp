package com.example.zshop.Services;

import com.example.zshop.DTO.PromotionDTO;
import com.example.zshop.Mappers.PromotionMapper;
import com.example.zshop.Models.Promotion;
import com.example.zshop.Models.ProductCategory;
import com.example.zshop.Repository.PromotionRepo;
import com.example.zshop.Service.ProductCategoryService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PromotionService {

    @Autowired
    private PromotionRepo promotionRepository;

    @Autowired
    private ProductCategoryService categoryService; // Autowired CategoryService4
    @Autowired
    private PromotionMapper promotionMapper;

    // Save promotion with category validation
    public PromotionDTO savePromotion(PromotionDTO promotionDTO) {
        List<ProductCategory> categories = categoryService.findCategoriesByIds(promotionDTO.getCategoryIds());

        if (categories.size() != promotionDTO.getCategoryIds().size()) {
            throw new EntityNotFoundException("Some categories do not exist.");
        }

        Promotion promotion = new Promotion();
        promotion.setName(promotionDTO.getName());
        promotion.setDescription(promotionDTO.getDescription());
        promotion.setDiscountRate(promotionDTO.getDiscountRate());
        promotion.setStartDate(promotionDTO.getStartDate());
        promotion.setEndDate(promotionDTO.getEndDate());
        promotion.setCategories(categories);

        return promotionMapper.promotionToPromotionDTO( promotionRepository.save(promotion));
    }

    // Update promotion with category validation

    public PromotionDTO updatePromotion(Long id, PromotionDTO promotionDTO) {
        Optional<Promotion> existingPromotion = promotionRepository.findById(id);

        if (existingPromotion.isEmpty()) {
            throw new EntityNotFoundException("Promotion with ID " + id + " not found.");
        }

        Promotion promotion = existingPromotion.get();

        List<ProductCategory> categories = categoryService.findCategoriesByIds(promotionDTO.getCategoryIds());
        if (categories.size() != promotionDTO.getCategoryIds().size()) {
            throw new EntityNotFoundException("Some categories do not exist.");
        }

        promotion.setName(promotionDTO.getName());
        promotion.setDescription(promotionDTO.getDescription());
        promotion.setDiscountRate(promotionDTO.getDiscountRate());
        promotion.setStartDate(promotionDTO.getStartDate());
        promotion.setEndDate(promotionDTO.getEndDate());
        promotion.setCategories(categories);

        return promotionMapper.promotionToPromotionDTO( promotionRepository.save(promotion));
    }
    @Transactional
    public PromotionDTO addCategoriesToPromotion(Long id, List<Long> categoryIds) {
        Optional<Promotion> existingPromotion = promotionRepository.findById(id);

        if (existingPromotion.isEmpty()) {
            throw new EntityNotFoundException("Promotion with ID " + id + " not found.");
        }

        Promotion promotion = existingPromotion.get();

        List<ProductCategory> categories = categoryService.findCategoriesByIds(categoryIds);
        if (categories.size() != categoryIds.size()) {
            throw new EntityNotFoundException("Some categories do not exist.");
        }

        // Adding new categories to the existing list
        List<ProductCategory> categoryList = promotion.getCategories();
        categoryList.addAll(categories);
        promotion.setCategories(categoryList);

        // Iterate through categories and add the promotion to each category
        for (ProductCategory category : categories) {
            // Check if the promotion is not already added to avoid duplicates
            if (!category.getPromotions().contains(promotion)) {
                category.getPromotions().add(promotion);
            }
        }

        // Save the updated promotion and the updated categories
        promotionRepository.save(promotion);
        for (ProductCategory category : categories) {
            categoryService.saveCategory(category); // Ensure the category is saved with updated promotions
        }

        return promotionMapper.promotionToPromotionDTO(promotion);
    }    // Add categories to an existing promotion

    public PromotionDTO getPromotionById(Long id) {
        return promotionMapper.promotionToPromotionDTO( promotionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Promotion with ID " + id + " not found.")));
    }

    // Delete promotion by ID
    public PromotionDTO deletePromotion(Long id) {
        if (!promotionRepository.existsById(id)) {
            throw new EntityNotFoundException("Promotion with ID " + id + " not found.");
        }
        promotionRepository.deleteById(id);
        return promotionMapper.promotionToPromotionDTO( promotionRepository.findById(id).get());
    }
    public List<PromotionDTO> getAllPromotions(){
        return promotionRepository.findAll().stream().map(promotion -> promotionMapper.promotionToPromotionDTO(promotion)).toList();
    }
}
