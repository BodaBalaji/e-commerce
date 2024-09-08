import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

const Signup = ({ setUser }) => {
  const navigate = useNavigate();
  const [userSignUp, setUserSignUp] = useState({});

  const [confirmPassword, setConfirmPassword] = useState("");
  const handleInfo = (e) => {
    if (e.target.name === "confirmPassword") setConfirmPassword(e.target.value);
    else {
      const value = e.target.value;
      setUserSignUp({ ...userSignUp, [e.target.name]: value });
    }
  };

  const createUser = (e) => {
    e.preventDefault();
    if(confirmPassword === userSignUp.password)
    {
      UserService.signUpUser(userSignUp)
      .then((response) =>{
        setUser(userSignUp);
        navigate("/homePage")
      }).catch((error) =>{
        console.log(error);
      })
        
      
    }
    else
     alert("wrong password");
  };

  return (
    <div>
      <div className="nav">
        <h1>Register</h1>
      </div>
      <div className="container">
        <div className="signUp">
          <h2>Sign Up</h2>
          <form>
            <input
              id="username"
              type="text"
              name="userName"
              value={userSignUp.name}
              placeholder="Enter Username"
              onChange={(e) => handleInfo(e)}
              required
            />
            <br />
            <input
              id="email"
              type="email"
              name="email"
              value={userSignUp.email}
              placeholder="Enter email"
              onChange={(e) => handleInfo(e)}
              required
            />
            <br />
            <input
              id="mobileNumber"
              type="number"
              name="mobileNumber"
              placeholder="Enter Mobile number"
              value={userSignUp.mobileNumber}
              onChange={(e) => handleInfo(e)}
              required
            />
            <br />
            <input
              id="password"
              type="password"
              name="password"
              value={userSignUp.password}
              placeholder=" Password"
              onChange={(e) => handleInfo(e)}
              required
            />
            <br />
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => handleInfo(e)}
              required
            />
            <br />
            <button id="submitButton" onClick={e => createUser(e)}>
              Submit
            </button>
          </form>
          <div className="bottomForm">
            <span>Already have an account ?</span>
            <a
              onClick={(e) => {
                navigate("/signIn");
              }}
              id="signinLink"
              className="alreadySingInUp"
              href="signIn"
            >
              Log In
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

export default Signup;
