package com.example.zshop.Service;

import com.example.zshop.DTO.ProductRequest;
import com.example.zshop.DTO.ProductSummaryDTO;
import com.example.zshop.Mappers.ProductMapper;
import com.example.zshop.Models.Product;

import com.example.zshop.Models.VariationOption;
import com.example.zshop.Repository.ProductRepo;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private ProductCategoryService productCategoryService;
    @Autowired
    private EntityManager entityManager;
    @Autowired
    private ProductMapper productMapper;

    public List<ProductSummaryDTO> getAllProducts(){
        return productRepo.findAll().stream()
                .map(productMapper::toProductSummaryDTO)
                .collect(Collectors.toList());
    }
    public void createProduct(ProductRequest productDetails){
        Product newProduct=new Product();
        newProduct.setName(productDetails.getName());
        newProduct.setDescription(productDetails.getDesctiption());
        newProduct.setProductImage(productDetails.getImageUrl());
        Product addProductCategorie=addProductCategories(newProduct,productDetails.getProductCategory());
        productRepo.save(addProductCategorie);
    }
    public ProductSummaryDTO getOneProduct(long id){
        Optional<Product> productOptional=productRepo.findById(id);
        if(productOptional.isPresent()){
            return productMapper.toProductSummaryDTO(productOptional.get());

        }
        else{
            throw  new EntityNotFoundException("Product with id "+id+" not exists");
        }
    }
//    public  updateProduct(long id,ProductRequest productRequest){
//        Optional<Product> existingProductOptional=productRepo.findById(id);
//        if(existingProductOptional.isEmpty()){
//            throw new EntityNotFoundException("Product with id "+id+" not found");
//        }
//        Product existingProduct=existingProductOptional.get();
//        existingProduct.setName(productRequest.getName());
//        existingProduct.setDescription(productRequest.getDesctiption());
//        existingProduct.setProductImage(productRequest.getImageUrl());
//        existingProduct.setPrice(productRequest.getPrice());
//        Product addedCategoryProduct=addProductCategories(existingProduct,productRequest.getProductCategory());
//
//        return productRepo.save(addedCategoryProduct);
//    }
    public ProductSummaryDTO deleteProduct(long id){
        if(productRepo.existsById(id)){
            productRepo.deleteById(id);
            return productMapper.toProductSummaryDTO(productRepo.findById(id).get());
        }
        else{
            throw new EntityNotFoundException();
        }
    }
    public Product addProductCategories(Product product,String category){
        if(category.isEmpty()){
            return product;
        }
        if(productCategoryService.isCategoryExists(category)){
            product.setCategory(productCategoryService.findByName(category));
        }
        else{
            productCategoryService.createProductCategory(category);
            product.setCategory(productCategoryService.findByName(category));
        }
        return product;
    }
    public List<VariationOption> getAvailableSizesAndColors(Long productId) {
        // JPA query to get product variations (sizes and colors) for a product
        String jpql = "SELECT DISTINCT vc.variationOption " +
                "FROM ProductItem pi " +
                "JOIN pi.configurations vc " +
                "JOIN vc.variationOption vo " +
                "WHERE pi.product.id = :productId";


        TypedQuery<VariationOption> query = entityManager.createQuery(jpql, VariationOption.class);
        query.setParameter("productId", productId);

        return query.getResultList();
    }
    public List<Product> getAllProductsByIds(List<Long> idList){
        return productRepo.findAllById(idList);
    }
    public ProductSummaryDTO updateProduct(Long productId, ProductRequest productRequest) {
        // Find the product by ID
        Optional<Product> optionalProduct = productRepo.findById(productId);

        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();

            // Update fields only if they are non-null and non-empty
            if (StringUtils.hasText(productRequest.getName())) {
                product.setName(productRequest.getName());
            }

            if (StringUtils.hasText(productRequest.getDesctiption())) {  // Ensure correct spelling of "description"
                product.setDescription(productRequest.getDesctiption());
            }

            if (StringUtils.hasText(productRequest.getImageUrl())) {
                product.setProductImage(productRequest.getImageUrl());
            }

            if (StringUtils.hasText(productRequest.getProductCategory())) {
                product.setCategory(productCategoryService.findByName(productRequest.getProductCategory()));
            }

            if (productRequest.getPrice() != null && productRequest.getPrice().compareTo(BigDecimal.ZERO) > 0) {
                product.setPrice(productRequest.getPrice());
            }

            // Save the updated product
            return productMapper.toProductSummaryDTO( productRepo.save(product));
        } else {
            throw new IllegalArgumentException("Product with ID " + productId + " not found");
        }
    }

}
