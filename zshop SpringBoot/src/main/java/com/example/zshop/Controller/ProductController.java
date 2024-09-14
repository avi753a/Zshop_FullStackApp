package com.example.zshop.Controller;

import com.example.zshop.DTO.ProductRequest;
import com.example.zshop.DTO.ProductSummaryDTO;
import com.example.zshop.Models.Product;
import com.example.zshop.Models.VariationOption;
import com.example.zshop.Service.ProductService;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SecurityRequirement(name = "jwt")  // Apply to the entire controller
@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductSummaryDTO>> getAllProducts(){
        return ResponseEntity.ok( productService.getAllProducts());
    }
    @PostMapping
    public void createProduct(@RequestBody ProductRequest product){
         productService.createProduct(product);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProductSummaryDTO> getSingleProduct(@PathVariable long id){
       return ResponseEntity.ok( productService.getOneProduct(id));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<ProductSummaryDTO> deleteProduct(@PathVariable long id){
        return ResponseEntity.ok(productService.deleteProduct(id));
    }
    @GetMapping("/{id}/variations")
    public List<VariationOption> getSizesAndColors(@PathVariable Long id){
        return productService.getAvailableSizesAndColors(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<ProductSummaryDTO> updateProduct(@PathVariable long id,@RequestBody ProductRequest productRequest){
      return ResponseEntity.ok(productService.updateProduct(id,productRequest));
    }
}
