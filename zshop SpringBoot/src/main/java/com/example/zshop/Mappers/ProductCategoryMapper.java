package com.example.zshop.Mappers;

import com.example.zshop.DTO.ProductCategoryDTO;
import com.example.zshop.Models.Product;
import com.example.zshop.Models.ProductCategory;
import com.example.zshop.Models.Promotion;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ProductCategoryMapper {

    ProductCategoryMapper INSTANCE = Mappers.getMapper(ProductCategoryMapper.class);

    @Mapping(target = "productIds", source = "products")
    @Mapping(target = "promotionIds", source = "promotions")
    ProductCategoryDTO productCategoryToProductCategoryDTO(ProductCategory category);

    default List<Long> mapProductsToIds(List<Product> products) {
        return products.stream()
                .map(Product::getId)
                .collect(Collectors.toList());
    }

    default List<Long> mapPromotionsToIds(List<Promotion> promotions) {
        return promotions.stream()
                .map(Promotion::getId)
                .collect(Collectors.toList());
    }
}
