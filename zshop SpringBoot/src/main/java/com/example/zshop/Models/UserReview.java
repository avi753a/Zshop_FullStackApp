package com.example.zshop.Models;

import jakarta.persistence.*;

@Entity
public class UserReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int ratingValue;
    private String comment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRatingValue() {
        return ratingValue;
    }

    public void setRatingValue(int ratingValue) {
        this.ratingValue = ratingValue;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public UserPrinciple getSiteUser() {
        return siteUser;
    }

    public void setSiteUser(UserPrinciple siteUser) {
        this.siteUser = siteUser;
    }

    public ProductItem getOrderedProduct() {
        return orderedProduct;
    }

    public void setOrderedProduct(ProductItem orderedProduct) {
        this.orderedProduct = orderedProduct;
    }

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserPrinciple siteUser;

    @ManyToOne
    @JoinColumn(name = "ordered_product_id")
    private ProductItem orderedProduct;

    // Getters and Setters
}
