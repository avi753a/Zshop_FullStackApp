package com.example.zshop.DTO;

import java.math.BigDecimal;
import java.util.List;

public class ProductSummaryDTO {
    private Long id;  // Adding id field
    private String productName;
    private String productDescription;
    private String productImage;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getMaxDiscountName() {
        return maxDiscountName;
    }

    public void setMaxDiscountName(String maxDiscountName) {
        this.maxDiscountName = maxDiscountName;
    }

    public double getMaxDiscountRate() {
        return maxDiscountRate;
    }

    public void setMaxDiscountRate(double maxDiscountRate) {
        this.maxDiscountRate = maxDiscountRate;
    }

    public BigDecimal getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(BigDecimal originalPrice) {
        this.originalPrice = originalPrice;
    }

    public BigDecimal getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(BigDecimal discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public List<ConfigurationDTO> getConfigurations() {
        return configurations;
    }

    public void setConfigurations(List<ConfigurationDTO> configurations) {
        this.configurations = configurations;
    }

    public List<ReviewDTO> getReviews() {
        return reviews;
    }

    public void setReviews(List<ReviewDTO> reviews) {
        this.reviews = reviews;
    }

    private String categoryName;
    private String maxDiscountName;
    private double maxDiscountRate;
    private BigDecimal originalPrice;  // Correctly define originalPrice
    private BigDecimal discountedPrice;  // Also define discountedPrice properly
    private List<ConfigurationDTO> configurations;
    private List<ReviewDTO> reviews;
}
