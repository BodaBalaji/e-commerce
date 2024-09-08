import React from 'react'
import { Outlet } from 'react-router-dom';
import SimpleLoginSession from '../SimpleLoginSession'
import Login from './Login';

const isAuth = () =>{
    return SimpleLoginSession.isSignIn();
}

const ProtectedRoute = () => {
  const isAthorized = isAuth();
  return isAthorized ? <Outlet/> : <Login/>
}


export default ProtectedRoute