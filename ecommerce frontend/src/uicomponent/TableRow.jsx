import React, { useState } from 'react'
import { useEffect } from 'react';
import CartService from '../services/CartService';
import ProductService from '../services/ProductService';

const TableRow = ({cart, deleteCart}) => {
  const[product, setProduct] = useState({});
  const[cartUpdate, setCartUpdate] = useState(cart);
  useEffect(() => {
    const fetchProduct = async (productId) =>{
        try{
            const response = await ProductService.getProductById(productId);
            setProduct(response.data);
            console.log("Product",product);
        }catch(error)
        {
            console.log(error);
        }
    }
    let id = cart.productId;
   fetchProduct(id)
  }, [])
  
 const saveUpdate = async (e)=>{
  const value = e.target.value;
  setCartUpdate({...cartUpdate,[e.target.name]:value});
    try{
      const response = await CartService.editCart(cart.id,cartUpdate);
      console.log(response);
      console.log(response.data);
    }catch(error)
    {
      console.log(error);
    }
    console.log(cartUpdate);
 }
  return (
      <tr>
        <td>{cart.id}.{product.name}</td>
        <td>{product.price * cartUpdate.quantity}</td>
        <td><select name="quantity" value={cartUpdate.quantity} onChange={(e) => saveUpdate(e)}>{[...Array(product.quantity).keys()].map((x) =>(
          <option key={x+1} value={x+1} >{x+1}</option>
        ))}</select></td>
        <td><button onClick={(e) => deleteCart(e,cart.id)} style={{width:"40%", borderRadius:"10px"}}>Delete</button></td>
      </tr>

  )
}

export default TableRow