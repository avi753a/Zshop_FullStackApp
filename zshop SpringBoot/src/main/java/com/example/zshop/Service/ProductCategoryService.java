package com.example.zshop.Service;

import com.example.zshop.DTO.ProductCategoryDTO;
import com.example.zshop.Mappers.ProductCategoryMapper;
import com.example.zshop.Models.ProductCategory;
import com.example.zshop.Repository.ProductCategoryRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductCategoryService {
    @Autowired
    private ProductCategoryRepo productCategoryRepo;
    @Autowired
    private ProductCategoryMapper productCategoryMapper;

    public ProductCategoryDTO createProductCategory(String categoryName){
        ProductCategory category=new ProductCategory();
        category.setCategoryName(categoryName);
        productCategoryRepo.save(category);
        return productCategoryMapper.productCategoryToProductCategoryDTO(category);
    }
    public ProductCategoryDTO addParentCategory(long childId,long parentId){
        Optional<ProductCategory> childCategoryOptional=productCategoryRepo.findById( childId);
        Optional<ProductCategory> parentCategoryOptional=productCategoryRepo.findById(parentId);
        if(childCategoryOptional.isEmpty()){
            throw new EntityNotFoundException("ProductCategory with Id"+childId+"Not Found");
        }
        if(parentCategoryOptional.isEmpty()){
            throw new EntityNotFoundException("ProductCategory with Id"+parentId+"Not Found");
        }
        childCategoryOptional.get().setParentCategory(parentCategoryOptional.get());
        return productCategoryMapper.productCategoryToProductCategoryDTO(childCategoryOptional.get());
    }
    public boolean isCategoryExists(String name){
        return  productCategoryRepo.findByName(name).isPresent();
    }
    public ProductCategory findByName(String name){
        Optional<ProductCategory> productCategoryOptional=productCategoryRepo.findByName(name);
        if(productCategoryOptional.isPresent()){
            return productCategoryOptional.get();
        }
        else{
            throw new EntityNotFoundException();
        }
    }
    public List<ProductCategory> findCategoriesByIds(List<Long> categoryIds) {
        return productCategoryRepo.findAllById(categoryIds);
    }
    public ProductCategoryDTO createCategory(ProductCategory category) {
        return productCategoryMapper.productCategoryToProductCategoryDTO(productCategoryRepo.save(category));
    }

    // Update an existing category
    public ProductCategoryDTO updateCategory(Long id, ProductCategory updatedCategory) {
        Optional<ProductCategory> category = productCategoryRepo.findById(id);
        if (category.isEmpty()) {
            throw new EntityNotFoundException("Category with ID " + id + " not found.");
        }

        ProductCategory existingCategory = category.get();
        existingCategory.setCategoryName(updatedCategory.getCategoryName());
        existingCategory.setParentCategory(updatedCategory.getParentCategory());
        return productCategoryMapper.productCategoryToProductCategoryDTO(productCategoryRepo.save(existingCategory));

    }

    // Get all categories
    public List<ProductCategoryDTO> getAllCategories() {
        return productCategoryRepo.findAll().stream().map(category -> productCategoryMapper.productCategoryToProductCategoryDTO(category)).toList();
    }

    // Get category by ID
    public ProductCategoryDTO getCategoryById(Long id) {
        return productCategoryMapper.productCategoryToProductCategoryDTO(productCategoryRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category with ID " + id + " not found.")));
    }

    // Delete a category by ID
    public ProductCategoryDTO deleteCategory(Long id) {
        if (!productCategoryRepo.existsById(id)) {
            throw new EntityNotFoundException("Category with ID " + id + " not found.");
        }
        ProductCategory category=productCategoryRepo.findById(id).get();
        productCategoryRepo.deleteById(id);
        return productCategoryMapper.productCategoryToProductCategoryDTO(category);
    }
    public void saveCategory(ProductCategory category){
        productCategoryRepo.save(category);
    }

    // Add products to a category by a list of product IDs
//    public ProductCategory addProductsToCategory(Long categoryId, List<Long> productIds) {
//        ProductCategory category = productCategoryRepo.findById(categoryId)
//                .orElseThrow(() -> new EntityNotFoundException("Category with ID " + categoryId + " not found."));
//
//        List<Product> products = productService.getAllProductsByIds(productIds);
//        if (products.size() != productIds.size()) {
//            throw new EntityNotFoundException("Some products do not exist.");
//        }
//
//        category.getProducts().addAll(products);
//        return productCategoryRepo.save(category);
//    }
}
