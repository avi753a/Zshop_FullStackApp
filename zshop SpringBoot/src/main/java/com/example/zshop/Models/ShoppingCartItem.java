package com.example.zshop.Models;

import jakarta.persistence.*;

@Entity
public class ShoppingCartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int qty;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserPrinciple siteUser;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public UserPrinciple getSiteUser() {
        return siteUser;
    }

    public void setSiteUser(UserPrinciple siteUser) {
        this.siteUser = siteUser;
    }

    public ProductItem getProductItem() {
        return productItem;
    }

    public void setProductItem(ProductItem productItem) {
        this.productItem = productItem;
    }

    @ManyToOne
    @JoinColumn(name = "product_item_id")
    private ProductItem productItem;

    // Getters and Setters
}
