package com.example.zshop.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Variation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<VariationOption> getVariationOptions() {
        return variationOptions;
    }

    public void setVariationOptions(List<VariationOption> variationOptions) {
        this.variationOptions = variationOptions;
    }

    @OneToMany(mappedBy = "variation")
    private List<VariationOption> variationOptions;

    // Getters and Setters
}
