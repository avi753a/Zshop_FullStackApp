package com.example.zshop.Service;

import com.example.zshop.DTO.RegisterRequest;
import com.example.zshop.DTO.UserSummaryDTO;
import com.example.zshop.Mappers.UserMapper;
import com.example.zshop.Models.Authority;
import com.example.zshop.Models.UserPrinciple;
import com.example.zshop.Repository.UserRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private UserMapper userMapper;


    @Override
    public UserPrinciple loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserPrinciple> userPrincipleOptional;
        userPrincipleOptional = userRepo.findByUsername(username);
        if (userPrincipleOptional.isEmpty()) {
            userPrincipleOptional = getUserByEmail(username);
            if (userPrincipleOptional.isEmpty()) {
                throw new UsernameNotFoundException("User not Found with username or email: " + username);
            }
        }
        UserPrinciple user = userPrincipleOptional.get();
//        Set<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
//                .map(authority -> new SimpleGrantedAuthority(authority.getName()))
//                .collect(Collectors.toSet());
//        System.out.println(grantedAuthorities.toString());
        return user;
    }
    public List<UserSummaryDTO> getAllUsers(){
        return userRepo.findAll().stream()
                .map(userMapper::toUserSummaryDTO)
                .collect(Collectors.toList());
    }
    public UserPrinciple register(RegisterRequest registerRequest){
        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(10);
        UserPrinciple user=new UserPrinciple();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setFullname(registerRequest.getUsername());
        userRepo.save(user);
        return user;
    }

    public Optional<UserPrinciple> getUserByEmail(String email) {
        return userRepo.findAll()
                .stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst();
    }
    public List<UserPrinciple> findMultipleUsersFromList(List<Long> userIdList){
        List<UserPrinciple> users=userRepo.findAllById(userIdList);
        System.out.println(users+""+userIdList);
        System.out.println(users.size()==userIdList.size());
        System.out.println(users.size());
        System.out.println(userIdList.size());
        if(users.size()!=userIdList.size()){
            List<Long> existingUserIds = users.stream()
                    .map(UserPrinciple::getId)
                    .toList();

            // Find missing IDs
            List<Long> missingIds = userIdList.stream()
                    .filter(id -> !existingUserIds.contains(id))
                    .toList();

            throw new EntityNotFoundException("Users are not found for some Id's. Missing IDs: " + missingIds);
        }
        else{
            return users;
        }
    }
    public UserPrinciple deleteUser(long id){
        Optional<UserPrinciple> userPrincipleOptional=userRepo.findById(id);
        if(userPrincipleOptional.isEmpty()){
            throw new EntityNotFoundException("User with id "+id+" not found");
        }
        userRepo.deleteById(id);
        return userPrincipleOptional.get();
    }

}
