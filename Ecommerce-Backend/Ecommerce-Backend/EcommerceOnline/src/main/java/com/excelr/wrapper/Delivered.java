package com.excelr.wrapper;


public class Delivered {
    boolean status;

    public Delivered(boolean status) {
        this.status = status;
    }

    public Delivered() {
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
