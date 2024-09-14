package com.example.zshop.Service;

import com.example.zshop.DTO.AuthorityRequest;
import com.example.zshop.DTO.AuthorityUserAssignment;
import com.example.zshop.Models.Authority;
import com.example.zshop.Models.UserPrinciple;
import com.example.zshop.Repository.AuthorityRepo;
import jakarta.persistence.EntityNotFoundException;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AuthorityService {
    @Autowired
    private AuthorityRepo authorityRepo;
    @Autowired
    private UserService userService;

    public Authority createAuthority(AuthorityRequest authorityRequest){
        Authority authority=new Authority(authorityRequest.getName());
        authority.setDescription(authority.getDescription());
        authorityRepo.save(authority);
        return authority;
    }
    public List<Authority> getAllAuthorities(){
        return authorityRepo.findAll();
    }
    public void addUserTOAuthority(String authorityName, UserPrinciple user){
        Optional<Authority> authorityOpt = authorityRepo.findByName(authorityName);
        if (!authorityOpt.isPresent()) {
            throw new RuntimeException("Authority not found");
        }
        Authority authority = authorityOpt.get();
        Set<UserPrinciple> users = authority.getUsers();
        if (users == null) {
            users = new HashSet<>();
        }
        users.add(user);
        authority.setUsers(users);
        authorityRepo.save(authority);
    }
    public boolean isExists(String name){
        return authorityRepo.findByName(name).isPresent();
    }
    public Authority getAuthority(String name){
       Optional<Authority> authorityOptional= authorityRepo.findByName(name);
       if(authorityOptional.isPresent()){
           return  authorityOptional.get();
       }
       else{
           throw new RuntimeException("Authority Not Found");
       }
    }

    public Authority addUsersToAuthority(AuthorityUserAssignment authorityUserAssignment) {
        // Fetch the authority by ID
        Optional<Authority> authorityOptional = authorityRepo.findById(authorityUserAssignment.getAuthorityId());

        // Check if the authority exists
        if (authorityOptional.isEmpty()) {
            throw new EntityNotFoundException("Authority with id " + authorityUserAssignment.getAuthorityId() + " does not exist");
        }

        Authority authority = authorityOptional.get();

        // Get the list of users to be added to the authority
        List<UserPrinciple> usersToBeAdded = userService.findMultipleUsersFromList(authorityUserAssignment.getUsersList());
        for (UserPrinciple user : usersToBeAdded) {
            user.addAuthority(authority);  // This will also add the user to the authority's user set
            // Optionally save the user if needed (depends on your setup)
//            userRepo.save(user);
        }

        authorityRepo.save(authority);

        return authority;
    }
    public Authority deleteAuthority(long id){
        Optional<Authority> authorityOptional=authorityRepo.findById(id);
        if(authorityOptional.isEmpty()){
            throw new EntityNotFoundException();
        }
        authorityRepo.deleteById(id);
        return authorityOptional.get();
    }


}
