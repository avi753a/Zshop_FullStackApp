package com.example.zshop.Mappers;

import com.example.zshop.DTO.ConfigurationDTO;
import com.example.zshop.DTO.ProductSummaryDTO;
import com.example.zshop.DTO.ReviewDTO;
import com.example.zshop.Models.Product;
import com.example.zshop.Models.ProductItem;
import com.example.zshop.Models.Promotion;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "productName")
    @Mapping(source = "description", target = "productDescription")
    @Mapping(source = "productImage", target = "productImage")
    @Mapping(source = "category.categoryName", target = "categoryName")
    @Mapping(source = "price", target = "originalPrice")  // Map price to originalPrice
    @Mapping(target = "discountedPrice", expression = "java(calculateDiscountedPrice(product.getPrice(), getMaxDiscountRate(product)))")  // Calculate discountedPrice
    @Mapping(target = "maxDiscountName", expression = "java(getMaxDiscountName(product))")
    @Mapping(target = "maxDiscountRate", expression = "java(getMaxDiscountRate(product))")
    @Mapping(source = "productItems", target = "configurations", qualifiedByName = "mapConfigurations")
    @Mapping(source = "productItems", target = "reviews", qualifiedByName = "mapReviews")
    ProductSummaryDTO toProductSummaryDTO(Product product);

    @Named("mapConfigurations")
    default List<ConfigurationDTO> mapConfigurations(List<ProductItem> productItems) {
        return productItems.stream()
                .flatMap(productItem -> productItem.getConfigurations().stream())
                .map(config -> {
                    ConfigurationDTO configurationDTO = new ConfigurationDTO();
                    configurationDTO.setId(config.getId());
                    configurationDTO.setVariationName(config.getVariationOption().getVariation().getName());
                    configurationDTO.setVariationValue(config.getVariationOption().getValue());
                    return configurationDTO;
                })
                .collect(Collectors.toList());
    }

    @Named("mapReviews")
    default List<ReviewDTO> mapReviews(List<ProductItem> productItems) {
        return productItems.stream()
                .flatMap(productItem -> productItem.getReviews().stream())
                .map(review -> {
                    ReviewDTO reviewDTO = new ReviewDTO();
                    reviewDTO.setId(review.getId());
                    reviewDTO.setUsername(review.getSiteUser().getUsername());
                    reviewDTO.setRatingValue(review.getRatingValue());
                    reviewDTO.setComment(review.getComment());
                    return reviewDTO;
                })
                .collect(Collectors.toList());
    }

    default String getMaxDiscountName(Product product) {
        return product.getCategory().getPromotions().stream()
                .max(Comparator.comparingDouble(Promotion::getDiscountRate))
                .map(Promotion::getName)
                .orElse(null);
    }

    default double getMaxDiscountRate(Product product) {
        return product.getCategory().getPromotions().stream()
                .max(Comparator.comparingDouble(Promotion::getDiscountRate))
                .map(Promotion::getDiscountRate)
                .orElse(0.0);
    }

    default BigDecimal calculateDiscountedPrice(BigDecimal originalPrice, double maxDiscountRate) {
        if (maxDiscountRate == 0.0 || originalPrice == null) {
            return originalPrice;
        }
        BigDecimal discount = originalPrice.multiply(BigDecimal.valueOf(maxDiscountRate)).divide(BigDecimal.valueOf(100));
        return originalPrice.subtract(discount);
    }
}
