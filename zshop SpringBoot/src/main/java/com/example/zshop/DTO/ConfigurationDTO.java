package com.example.zshop.DTO;

public class ConfigurationDTO {
    public String getVariationName() {
        return variationName;
    }

    public void setVariationName(String variationName) {
        this.variationName = variationName;
    }

    public String getVariationValue() {
        return variationValue;
    }

    public void setVariationValue(String variationValue) {
        this.variationValue = variationValue;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    private long id;
    private String variationName;
    private String variationValue;

    // Getters and Setters
}
