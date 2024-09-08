package com.excelr.repo;

import com.excelr.entity.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<CartEntity,Long> {
    List<CartEntity> findByUserId(Long userId);

    void  deleteByUserId(Long userId);
}
