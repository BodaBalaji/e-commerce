import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderService from '../services/OrderService';
import SimpleLoginSession from '../SimpleLoginSession';
import OrderUserTableRow from '../uicomponent/OrderUserTableRow';
import NavigationBar from './NavigationBar';

export const Order = () => {

    const[orderList, setOrderList] = useState([]);
    const [loading , setLoading] = useState(false);

    const userId = SimpleLoginSession.getUser().id;
    useEffect(() => {
     const getOrderById = async (userId)=>{
        console.log("sam",userId);
        setLoading(true);
        try {
            const response = await OrderService.getOrderByUserId(userId);
            setOrderList(response.data)
        } catch (error) {
           console.log(error);
        }
       setLoading(false)
     }

     getOrderById(userId);
    }, [])
    
  return (
    <>
    <NavigationBar/>
    <div className='table'>
        <table id='productOrderBody'>
            <thead>
                <tr>
                <th className='firstItem'>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delivery Status</th>
                </tr>
            </thead>
            <tbody>
                { !loading && (
                    <>
                        {orderList.map((order) =>(
                           <OrderUserTableRow order={order}/>
                        ))

                        }
                    </>
                )}
            </tbody>

        </table>
        <div className='orderBtnDiv'>
            <button className='orderBtn' id='payButton'>Pay</button>
        </div>
    </div>
    </>
  )
}
export default Order;