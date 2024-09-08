import React, { useEffect } from 'react'
import { useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import CartService from '../services/CartService';
import ProductService from '../services/ProductService';
import SimpleLoginSession from '../SimpleLoginSession';
import NavigationBar from './NavigationBar';

const ProductDetails = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const userId = SimpleLoginSession.getUser().id;
  const [product, setproduct] = useState({});
  const [qty, setQty] = useState(1);
  const addToCart = () =>{
   console.log(userId);
     CartService.addToCart({
        userId:userId,
        productId :id,
        quantity  : qty
     }).then((response) =>{
        navigate('/cart')
     }).catch((error) =>{
        console.log(error);
     })
  };
  useEffect(() => {

    
    const fetchData = async () =>{
        try{
            const response = await ProductService.getProductById(id);
            setproduct(response.data);
        }catch(error){
            console.log(error);
        }
    }
  fetchData();

  }, [])


  return (
   <>
   <NavigationBar/>
    <div className='orderView'>
        <div><img src={product.imageUrl} alt='Product Image'/></div>
        <div className='productDetailsContainer'>
           Name     : {product.name} <br/>
           Price    : {product.price} <br/>
           Quantity : {product.quantity}
           <select onChange={(e) => setQty(e.target.value)}>{
              [...Array(product.quantity).keys()].map((x) =>(
               <option key={x+1} value={x+1}> {x+1}</option>
              ))
            }
            </select> <br/>
           <br />
           <button className='button' onClick={() =>addToCart()}>AddToCart</button>
        </div>
    </div>
    </>
  )
}

export default ProductDetails