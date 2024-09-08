package com.excelr.service;
import com.excelr.entity.UserEntity;
import com.excelr.wrapper.Login;

import java.util.List;

public interface UserService {
    UserEntity createUser(UserEntity user);
    UserEntity getUserByEmailAndPassword(Login login);
    UserEntity updateUser(Long id, UserEntity user);

    List<UserEntity> getAllUsers();
}