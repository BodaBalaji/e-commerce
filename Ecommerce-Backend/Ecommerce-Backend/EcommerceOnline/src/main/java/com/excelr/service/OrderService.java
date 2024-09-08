package com.excelr.service;


import com.excelr.entity.OrderEntity;
import com.excelr.wrapper.Delivered;
import com.excelr.wrapper.Paid;

import java.util.List;

public interface OrderService {
    String addOrder(List<OrderEntity> orderList);

    String updatePaidStatus(Long id, Paid paid);

    String updateDeliveredStatus(Long id, Delivered delivered);

    List<OrderEntity> getAllOrders();

    List<OrderEntity> getOrdersByUserId(long id);


}
