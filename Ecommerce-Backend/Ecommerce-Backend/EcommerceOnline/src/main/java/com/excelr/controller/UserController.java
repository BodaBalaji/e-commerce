package com.excelr.controller;


import com.excelr.entity.UserEntity;
import com.excelr.service.UserService;
import com.excelr.wrapper.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user/")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public UserEntity createUser(@RequestBody UserEntity user)
    {
        return userService.createUser(user);
    }

    @PostMapping("login")
    public UserEntity findUserByPassword(@RequestBody Login userLogin)
    {
        System.out.println(userLogin);
        return userService.getUserByEmailAndPassword(userLogin);
    }

    @GetMapping("/")
    public List<UserEntity> getAllUser()
    {
        return userService.getAllUsers();
    }
}
