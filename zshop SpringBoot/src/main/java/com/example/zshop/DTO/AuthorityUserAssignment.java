package com.example.zshop.DTO;

import lombok.Data;

import java.util.List;

@Data
public class AuthorityUserAssignment {
    public Long getAuthorityId() {
        return authorityId;
    }

    public void setAuthorityId(Long authorityId) {
        this.authorityId = authorityId;
    }

    public List<Long> getUsersList() {
        return usersList;
    }

    public void setUsersList(List<Long> usersList) {
        this.usersList = usersList;
    }

    private Long authorityId;
    private List<Long> usersList;
}
