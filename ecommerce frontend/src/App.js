import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Login from './components/Login';
import Order from './components/Order';
// import NavigationBar from './components/NavigationBar';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import AdminHomePage from './components/AdminHomePage ';
import ViewOrders from './components/ViewOrders ';
import AddProduct from './components/AddProduct';
import { useEffect, useState } from 'react';
import ProductDetails from './components/ProductDetails';
import Users from './components/Users';
import ProductEdit from './components/ProductEdit';
import SimpleLoginSession from './SimpleLoginSession';
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  

  const [user, setUser] = useState({
    id:"",
    userName:"",
    email:"",
    mobileNumber:"",
    password:""
  });

  useEffect(() => {
     if(SimpleLoginSession.isSignIn())
     {
      setUser(SimpleLoginSession.getUser())
     }
  }, [])
  

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="signIn" element={<Login setUser={setUser} />}/>
              <Route path='/signUp' element={<Signup setUser={setUser}/>}/>
              { <Route path='/' element={<HomePage user={user}/>}/>}
              {<Route path='/homePage' element={<HomePage user={user}/>}/> }
              <Route element={<ProtectedRoute />} >
                <Route path='/productDetails/:id' element={<ProductDetails />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/order' element={<Order  />}/>
                <Route path='/products' element={<AddProduct/>}/>
                <Route path='/viewOrders' element={<ViewOrders/>}/>
                <Route path='/editProduct/:id' element={<ProductEdit/>} />

                <Route path='/adminHomePage' element={<AdminHomePage/>}/>
                <Route path='/users' element={<Users/>}/>
            </Route>
            
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
