import axios from "axios";

const ORDER_BASE_URL = "http://localhost:8080/order/"
class OrderService{

    //Adding order
    addOrder(orderList)
    {
        return axios.post(ORDER_BASE_URL,orderList);
    }

    //Updating order paid status
    updatePaidStatus(id,paidStatus)
    {
        return axios.put(ORDER_BASE_URL+"paid"+"/"+id, paidStatus);
    }

    //Get Orders by user id
    getOrderByUserId(userId)
    {
        return axios.get(ORDER_BASE_URL+userId);
    }

    //Get all orders
    getAllOrders()
    {
        return axios.get(ORDER_BASE_URL+"getAllOrders")
    }
    //Updating order delivery status
    updateDeliveryStatus(id,deliveryStatus)
    {
        return axios.put(ORDER_BASE_URL+"delivery"+"/"+id,deliveryStatus)
    }
}

export default new OrderService();