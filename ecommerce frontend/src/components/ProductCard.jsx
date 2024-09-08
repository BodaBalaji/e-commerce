import React from "react";
import {useNavigate} from 'react-router-dom'
const ProductCard = ({product}) => {

  const navigate = useNavigate();

  const productDetails = (e,id) =>{
    e.preventDefault();
    navigate(`/productDetails/${id}`)    
  }
  return (
    // <div className="productCard">
      <div className="card" onClick={(e)=>productDetails(e,product.id)}>
        <img className="product" src={product.imageUrl} alt="productImage" />
        <div className="productDes" style={{color:"white"}}>
          <div style={{color:"black", marginBottom:"10px",fontFamily:"sans-serif"}}><b>{product.name}</b></div>
          <div className="fa fa-inr"> {product.price}</div>
        </div>
      </div>
    /* </div> */
  );
};

export default ProductCard;
