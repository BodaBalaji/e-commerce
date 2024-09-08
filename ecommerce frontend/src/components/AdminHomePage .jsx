import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import AddProduct from './AddProduct';
import Users from './Users';
import ViewOrders from './ViewOrders ';

const AdminHomePage  = () => {

   const [component, setComponent] = useState();
  const renderComponet = (choice) =>{
    switch (choice) {
      case "product":
        setComponent(<AddProduct/>)
        break;
      case "orders":
        setComponent(<ViewOrders/>)
        break;
      case "users":
        setComponent(<Users/>)
        break;
        default:
          console.log("Nothing works");
          break;
    }
  }
  const logout = ()=>{
    window.sessionStorage.clear();
    navigate('/signIn')
  }
  const navigate = useNavigate();
  return (
    <div id='adminNavbar'>
        <nav>
    <a onClick={()=> renderComponet("product") } className='logo'>A2Z STORE</a>
    <div className='element'>
      <a id='adminProductButton' onClick={()=> renderComponet("product") } className='element'>Products</a>
      <a id='adminOrderButton' onClick={()=> renderComponet("orders") } className='element'>Orders</a>
      <a id='adminOrderButton' onClick={()=> renderComponet("users") } className='element'>Users</a>
    </div>
    <a id='logout' onClick={logout} className='logout'>Log out</a>
  </nav>
  <div>
    {component}
  </div>




















































































































































    </div>
  )
}

export default AdminHomePage 