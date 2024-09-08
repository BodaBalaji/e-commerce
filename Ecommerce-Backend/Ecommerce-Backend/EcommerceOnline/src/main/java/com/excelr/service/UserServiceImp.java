package com.excelr.service;
import com.excelr.entity.UserEntity;
import com.excelr.repo.UserRepository;
import com.excelr.wrapper.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserEntity createUser(UserEntity user) {
        return userRepository.save(user);
    }

    @Override
    public UserEntity getUserByEmailAndPassword(Login user) {
        String email = user.getEmail();
        String password = user.getPassword();
        return userRepository.findByEmailAndPassword(email,password);
    }


    @Override
    public UserEntity updateUser(Long id, UserEntity user) {
        return null;
    }

    @Override
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }
}
