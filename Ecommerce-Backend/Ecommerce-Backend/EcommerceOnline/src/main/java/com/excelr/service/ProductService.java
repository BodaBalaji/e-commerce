package com.excelr.service;

import com.excelr.entity.ProductEntity;
import java.util.List;


public interface ProductService {
    ProductEntity addProduct(ProductEntity product);

    ProductEntity updateProduct(ProductEntity product,Long id);

    List<ProductEntity> getAllProducts();

    ProductEntity getProduct(long id);

    String deleteProduct(long id);
}