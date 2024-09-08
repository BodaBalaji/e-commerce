import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductService from '../services/ProductService';

const OrderAdminTableRow = ({updateDeliveryStatus,order}) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const[orderModel, setOrderModel] = useState(order);
    useEffect(() => {
     const fetchProduct = async ()=>{
        setLoading(true);
        try {
            const response = await ProductService.getProductById(order.productId);
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
     }

     fetchProduct();
    }, [])

    const delivery = (e) =>{
        updateDeliveryStatus(order);
        setOrderModel({...orderModel,['delivered']:true})
    }
    const getPaidStatus = (paid) =>{
        console.log("Paid",paid);
        if(paid)
         return <button style={{backgroundColor:"green",width:"40%",borderRadius:"20px"}}>Paid</button>;
        else
        return <button style={{backgroundColor:"red",width:"40%",borderRadius:"20px"}} onClick={(e) => paid(e)}>Not Paid</button>
    }
    
    const getDeliveryStatus = (delivered) =>{
        console.log("Delivery", delivered);
        if(delivered)
         return <button style={{backgroundColor:"green", width:"40%",borderRadius:"20px"}}>Delivered</button>
        else
         return <button style={{backgroundColor:"red",width:"50%" ,borderRadius:"20px"}} onClick={(e) => delivery(e)}>Not Delivered</button>
    }
  return (
    <tr>
        <td>{orderModel.id}</td>
        <td>{orderModel.userId}</td>
        <td>{product.name}</td>
        <td>{product.price*order.quantity}</td>
        <td>{orderModel.quantity}</td>
        <td>{getPaidStatus(orderModel.paid)}</td>
        <td>{getDeliveryStatus(orderModel.delivered)}</td>
    </tr>
  )
}

export default OrderAdminTableRow