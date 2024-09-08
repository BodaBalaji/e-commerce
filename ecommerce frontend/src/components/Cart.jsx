import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartService from "../services/CartService";
import OrderService from "../services/OrderService";
import ProductService from "../services/ProductService";
import SimpleLoginSession from "../SimpleLoginSession";
import TableRow from "../uicomponent/TableRow";
import NavigationBar from "./NavigationBar";

const Cart = () => {
  
  const [cartList, setcartList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let count = 0;


  const [user_id, setUserId] = useState(SimpleLoginSession.getUser().id);

  useEffect(() => {
    if(!SimpleLoginSession.isSignIn())
    {
      navigate('signIn');
    }else{
      setUserId(SimpleLoginSession.getUser().id);
      console.log(SimpleLoginSession.getUser().id);
      const fetchList = (uID) => {
        setLoading(true);
        CartService.getCartByUserId(uID)
          .then((response) => {
            setcartList(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log("Cart Fetch Error",error);
          });
        setLoading(false);
      };
      fetchList(user_id);
    }
    
  }, [user_id]);

  const placeOrder = (e) => {
    e.preventDefault();
    const orderArray = [];
          for (let i = 0; i < cartList.length; i++) {
            const order = {
                userId: cartList[i].userId,
                productId: cartList[i].productId,
                quantity: cartList[i].quantity,
            };
            orderArray.push(order);
          }
    OrderService.addOrder(orderArray)
      .then((response) => {
         console.log(response.data);
         for(let i=0; i<cartList.length; i++)
         {
          deleteCart(e,cartList[i].id);
         }
         
      })
      .catch((error) => {
        console.log(error);
      });

      for(let i=0; i<cartList.length; i++)
      {
        getProduct(cartList[i].productId, cartList[i].quantity);
      }
  };

  const getProduct = async (productId,quantity) =>{
    try{
      const response =await ProductService.getProductById(productId);
      let data = response.data;
      console.log("Before up ",data);
      data.quantity = data.quantity - quantity;
      updateProduct(data,productId);
      console.log("After update",data);
      count++;
    }catch(error){
      console.log(error);
    }
  }
  const updateProduct = (product, productId) =>{
    ProductService.updateProduct(product,productId)
    .then((response) =>{
      console.log("Product Updated"+count , response.data);
      count++;
    }).catch((error) =>{
      console.log(error);
    })
  }
  const deleteCart = (e,cartId) =>{
    e.preventDefault();
    CartService.deleteCart(cartId)
    .then((response) =>{
      if(cartList){
        setcartList((preventElement) =>{
          return preventElement.filter((cart) => cart.id != cartId);
        })
      }
    }).catch((error) =>{
      console.log(error);
    })
  }
  return (
    <>
    <NavigationBar/>
   
    <div className="table">
      <table id="productCartBody">
        <thead>
          <tr>
            <th className="firstItem">Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!loading && (
            <>
              {cartList.map((cart) => (
                <TableRow cart={cart} key={cart.id}  deleteCart={deleteCart}/>
              ))}
            </>
          )}
        </tbody>
      </table>
      <div className="orderBtnDiv">
        <button
          onClick={(e) => placeOrder(e)}
          className="orderBtn"
          id="placeOrderButton"
        >
          Place Order
        </button>
      </div>
    </div>
    </>
  );
};

export default Cart;
