package com.excelr.controller;


import com.excelr.entity.OrderEntity;
import com.excelr.service.OrderService;
import com.excelr.wrapper.Delivered;
import com.excelr.wrapper.Paid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/order/")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/")
    public String addOrder(@RequestBody List<OrderEntity> order)
    {
        return orderService.addOrder(order);
    }

    @GetMapping("/getAllOrders")
    public List<OrderEntity> getAllOrders()
    {
        return orderService.getAllOrders();
    }

    @GetMapping("/{userId}")
    public List<OrderEntity> getOrderById(@PathVariable("userId") long id)
    {
        return orderService.getOrdersByUserId(id);
    }
    @PutMapping("/paid/{id}")
    public String updatePaidStatus(@PathVariable("id") Long id, @RequestBody Paid paid)
    {
        return orderService.updatePaidStatus(id,paid);
    }

    @PutMapping("/delivery/{id}")
    public String updateDeliveryStatus(@PathVariable("id") Long id, @RequestBody Delivered delivered)
    {
        return orderService.updateDeliveredStatus(id,delivered);
    }


}
