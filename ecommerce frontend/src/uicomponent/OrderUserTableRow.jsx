import React, { useEffect } from 'react'
import { useState } from 'react';
import ProductService from '../services/ProductService';

const OrderUserTableRow = ({order}) => {
  const [product, setProduct] = useState({});
  const [deleiveryStatus, setDeliveryStatus] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    const getProduct = async (id) =>{
      setLoading(true)
      try{
        const response = await ProductService.getProductById(id);
        setProduct(response.data);
      }catch(error){
        console.log(error);
      }  
      setLoading(false)
    }

    getProduct(order.productId);

    setDeliveryStatus(order.delivered);
    if(order.delivered)
    {
      setDeliveryStatus("Delivered");
    }else{
      setDeliveryStatus("Not Delivered");
    }
  }, [])
  
  return (
    <>
    {!loading && (
      <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{order.quantity}</td>
      <td>{deleiveryStatus}</td>
    </tr>
    )}
    </>
    
    
  )
}

export default OrderUserTableRow