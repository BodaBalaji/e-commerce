package com.excelr.service;

import com.excelr.entity.OrderEntity;
import com.excelr.repo.OrderRepository;
import com.excelr.wrapper.Delivered;
import com.excelr.wrapper.Paid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImp implements OrderService {

    @Autowired
    OrderRepository orderRepository;


    @Override
    public String addOrder(List<OrderEntity> orderList) {
        orderList.forEach((o1)->orderRepository.save(o1));
        return "Order Added Successfully!";
    }

    @Override
    public String updatePaidStatus(Long id, Paid paid) {
        OrderEntity orderEntity = orderRepository.findById(id).get();
        System.out.println(paid);
        orderEntity.setPaid(paid.isStatus());
        orderRepository.save(orderEntity);
        return "Paid status updated successfully!!";
    }

    @Override
    public String updateDeliveredStatus(Long id, Delivered delivered) {
        OrderEntity orderEntity =(OrderEntity) orderRepository.findById(id).get();
        orderEntity.setDelivered(delivered.isStatus());
        orderRepository.save(orderEntity);
        return "Delivery status updated !";
    }

    @Override
    public List<OrderEntity> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public List<OrderEntity> getOrdersByUserId(long id) {
        return orderRepository.findByUserId(id);
    }


}
