package com.excelr.controller;
import com.excelr.entity.ProductEntity;
import com.excelr.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//import javax.websocket.server.PathParam;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/product/")
@CrossOrigin
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/")
    public ProductEntity addProduct(@RequestBody ProductEntity product)
    {
        return productService.addProduct(product);
    }

    @GetMapping("/getProduct/{id}")
    public ProductEntity getProductById(@PathVariable("id") Long id)
    {
        return productService.getProduct(id);
    }

    @GetMapping("/")
    public List<ProductEntity> getAllProducts()
    {
        return productService.getAllProducts();
    }

    @PutMapping("/updateProduct/{id}")
    public ProductEntity updateProduct(@RequestBody ProductEntity product,@PathVariable("id") Long id)
    {
        return productService.updateProduct(product,id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable("id") Long id)
    {
        return productService.deleteProduct(id);
    }
}
