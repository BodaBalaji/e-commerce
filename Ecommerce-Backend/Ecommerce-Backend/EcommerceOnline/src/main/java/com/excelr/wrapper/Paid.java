package com.excelr.wrapper;

public class Paid {
    boolean status;
    public Paid() {
    }

    public Paid(boolean status) {
        this.status = status;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}

