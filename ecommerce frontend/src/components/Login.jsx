import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

const Login = ({ setUser }) => {

  const session = window.sessionStorage;

  const navigate = useNavigate();

  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInfo = (e) => {
    const value = e.target.value;
    setloginInfo({ ...loginInfo, [e.target.name]: value });
  };

  const handleLogin = async (e) =>{
    e.preventDefault();

    try{
      const resp = await UserService.loginUser({email:loginInfo.email,password:loginInfo.password});
      console.log(resp.data);
      if(resp.data.id >= 0)
      {
        const user = resp.data;
        session.setItem("user", JSON.stringify(user));
        setUser(resp.data);
        if(user.admin)
        {
          navigate('/adminHomePage');
        }else{
          navigate("/homePage")
        }
     
      }else{
        alert("Wrong password or email")
      }
    }catch(error){
      console.log(error.response);
    }
  }

  return (
    <div>
      <div className="nav">
        <h1>Login</h1>
      </div>
      <div className="container">
        <div className="signUp">
          <h2>Sign In</h2>
          <form>
            <input
              id="email"
              type="email"
              name="email"
              value={loginInfo.email}
              onChange={(e) => handleInfo(e)}
              placeholder="Enter email"
              required
            />
            <br />
            <input
              id="password"
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={(e) => handleInfo(e)}
              placeholder=" Password"
              required
            />
            <br />
            <button onClick={handleLogin} id="loginButton">
              Login
            </button>
          </form>
          <div className="bottomForm">
            <span>New User ? </span>
            <a
              onClick={(e) => navigate("/signUp")}
              id="signupLink"
              className="alreadySingInUp"
              href="signUp"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="img">
          <img src="\images\SignUp.jpg" alt="sign up image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
