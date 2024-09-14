package com.example.zshop.Models;
import jakarta.persistence.*;

@Entity
public class ProductConfiguration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_item_id")
    private ProductItem productItem;

    @ManyToOne
    @JoinColumn(name = "variation_option_id")
    private VariationOption variationOption;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ProductItem getProductItem() {
        return productItem;
    }

    public void setProductItem(ProductItem productItem) {
        this.productItem = productItem;
    }

    public VariationOption getVariationOption() {
        return variationOption;
    }

    public void setVariationOption(VariationOption variationOption) {
        this.variationOption = variationOption;
    }
// Getters and Setters
}

