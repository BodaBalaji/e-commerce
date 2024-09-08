package com.excelr.repo;


import com.excelr.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
     UserEntity findByEmailAndPassword(String email, String password);
}

