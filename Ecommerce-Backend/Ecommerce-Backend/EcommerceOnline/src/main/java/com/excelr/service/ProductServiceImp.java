package com.excelr.service;


import com.excelr.entity.ProductEntity;
import com.excelr.repo.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductServiceImp implements ProductService{

    @Autowired
    ProductRepository repostitory;

    @Override
    public ProductEntity addProduct(ProductEntity product) {
        repostitory.save(product);
        return product;
    }

    @Override
    public ProductEntity updateProduct(ProductEntity product,Long id) {
        ProductEntity productEntity = repostitory.findById(id).get();
        productEntity.setName(product.getName());
        productEntity.setImageUrl(product.getImageUrl());
        productEntity.setPrice(product.getPrice());
        productEntity.setQuantity(product.getQuantity());
        repostitory.save(productEntity);
        return productEntity;
    }

    @Override
    public List<ProductEntity> getAllProducts() {
        return repostitory.findAll();
    }

    @Override
    public ProductEntity getProduct(long id) {
        return repostitory.findById(id).get();
    }

    @Override
    public String deleteProduct(long id) {
        repostitory.deleteById(id);
        return "Deleted Successfully";
    }
}
