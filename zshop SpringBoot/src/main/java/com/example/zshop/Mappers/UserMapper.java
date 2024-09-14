package com.example.zshop.Mappers;

import com.example.zshop.DTO.UserSummaryDTO;
import com.example.zshop.Models.Authority;
import com.example.zshop.Models.UserPrinciple;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(source = "authorities", target = "authorities")
    UserSummaryDTO toUserSummaryDTO(UserPrinciple user);

    default List<String> mapAuthorities(Set<Authority> authorities) {
        return authorities.stream()
                .map(Authority::getName)
                .collect(Collectors.toList());
    }
}
