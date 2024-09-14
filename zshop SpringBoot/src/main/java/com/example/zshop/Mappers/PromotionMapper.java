package com.example.zshop.Mappers;

import com.example.zshop.DTO.PromotionDTO;
import com.example.zshop.Models.ProductCategory;
import com.example.zshop.Models.Promotion;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface PromotionMapper {

    PromotionMapper INSTANCE = Mappers.getMapper(PromotionMapper.class);

    @Mapping(target = "categoryIds", source = "categories")
    PromotionDTO promotionToPromotionDTO(Promotion promotion);

    default List<Long> mapCategoriesToCategoryIds(List<ProductCategory> categories) {
        return categories.stream()
                .map(ProductCategory::getId)
                .collect(Collectors.toList());
    }
}
