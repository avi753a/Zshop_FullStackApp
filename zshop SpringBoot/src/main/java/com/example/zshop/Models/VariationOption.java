package com.example.zshop.Models;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class VariationOption {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String value;

    @ManyToOne
    @JoinColumn(name = "variation_id")
    private Variation variation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Variation getVariation() {
        return variation;
    }

    public void setVariation(Variation variation) {
        this.variation = variation;
    }

    public List<ProductConfiguration> getConfigurations() {
        return configurations;
    }

    public void setConfigurations(List<ProductConfiguration> configurations) {
        this.configurations = configurations;
    }

    @OneToMany(mappedBy = "variationOption")
    private List<ProductConfiguration> configurations;

    // Getters and Setters
}
