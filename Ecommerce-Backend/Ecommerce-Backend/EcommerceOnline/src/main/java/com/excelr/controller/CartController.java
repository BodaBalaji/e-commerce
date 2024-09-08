package com.excelr.controller;


import com.excelr.entity.CartEntity;
import com.excelr.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart/")
@CrossOrigin("http://localhost:3000/")
public class CartController {

    @Autowired
    CartService cartService;

    @PostMapping("/addToCart")
    public CartEntity addToCart(@RequestBody CartEntity cart)
    {
        return cartService.addToCart(cart);
    }

    @PutMapping("/editCart/{id}")
    public CartEntity updateCart(@PathVariable("id")Long id, @RequestBody CartEntity cart)
    {
        return cartService.editCart(id,cart);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCart(@PathVariable("id") long id)
    {
        return cartService.deleteCart(id);
    }

    @Transactional
    @DeleteMapping("/empty/{id}")
    public String removeCart(@PathVariable("id") long userId)
    {
        return cartService.deleteCartByUserId(userId);
    }

    @PostMapping("/getCartList/{userId}")
    public List<CartEntity> getAllCartOfUser(@PathVariable("userId") long userId)
    {
        return cartService.getCartListByUserId(userId);
    }
}
