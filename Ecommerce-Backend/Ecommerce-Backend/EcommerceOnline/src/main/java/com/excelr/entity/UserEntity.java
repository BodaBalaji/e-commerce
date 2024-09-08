package com.excelr.entity;
import lombok.Data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Data
@Table(name = "user")
public class UserEntity {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String userName;

    @Column(unique = true)
    private String email;

    private String mobileNumber;
    private String password;
    private boolean isAdmin ;

    public UserEntity() {
        this.isAdmin = false;
    }

    public UserEntity(long id, String userName, String email, String mobileNumber, String password, boolean isAdmin) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}

