import React, { useEffect } from 'react'
import { useState } from 'react'
import OrderService from '../services/OrderService';
import OrderAdminTableRow from '../uicomponent/OrderAdminTableRow';

const ViewOrders  = () => {

 const [loading, setLoading] = useState(false);
 const [orderList, setOrderList] = useState([]);

 useEffect(() => {
   const fetchOrders = async () =>{
    setLoading(true);
    try {
        const response = await OrderService.getAllOrders();

        setOrderList(response.data);
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
   }

   fetchOrders();
 }, [])

 const updateDeliveryStatus = async (order) =>{
    try {
        const status = {status:true};
        console.log(order);
       const response =await  OrderService.updateDeliveryStatus(order.id,status);
       console.log(response.data);
    } catch (error) {
        console.log(error);
    }
 }
 
  return (
    <div  className='orderview'>
        <table className='adminOrders'>
            <thead>
            <tr>
                <th id='orderId'>Order Id</th>
                <th id='userId'>User Id</th>
                <th id='productName'>Product Name</th>
                <th id='productPrice'>Price</th>
                <th id='productQuantity'>Quantity</th>
                <th id='isPaid'>Paid Status</th>
                <th id='isDelivered'>Delivery Status</th>
            </tr>
            </thead>
            <tbody>
                {!loading && (
                    <>{orderList.map((order) =>(
                        <OrderAdminTableRow order={order} updateDeliveryStatus={updateDeliveryStatus} key={order.id}/>
                    ))

                    }
                    </>
                )}
            </tbody>
            
        </table>
    </div>
  )
}

export default ViewOrders 