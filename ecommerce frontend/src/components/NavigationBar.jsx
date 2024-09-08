import React from 'react'
import '../index.css'
import {useNavigate} from 'react-router-dom'

const NavigationBar = () => {

  const navigate = useNavigate();
  const logout = ()=>{
    window.sessionStorage.clear();
    navigate('/signIn')

  }
  return (
    <nav>
    <a onClick={()=> navigate('/homePage')} className='logo'>A2Z STORE</a>
    <div className='element'>
      <a id='productHomeButton' onClick={()=>navigate('/homePage')} className='element'><i className='fa fa-home'> Home</i></a>
      <a id='productCartButton' onClick={()=>navigate('/cart')} className='element'>🛒Cart</a>
      <a id='productOrderButton' onClick={()=> navigate('/order')} className='element'>My Orders</a>
    </div>
    <a id='logout' onClick={logout} className='logout'><i className='fa fa-user'></i> Log out</a>
  </nav>
  )
}

export default NavigationBar