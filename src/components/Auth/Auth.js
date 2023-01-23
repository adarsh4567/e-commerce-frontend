import React, { useState } from "react";
import "./auth.css";
import registerImg from "../../assets/register.svg";
import loginImg from "../../assets/login.svg";
import { SignInForm } from "./SignInForm/SignInForm";
import { SignUpForm } from "./SignUpForm/SignUpForm";

// Rounded Curve Panels

export const SignInPanel = ({isSignUp, setIsSignUp}) => {
  return (
    <div class="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>Register with us to continue your shopping...</p>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="btn"
          id="sign-up-btn"
        >
          Sign up
        </button>
      </div>
      <img src={loginImg} className="image" alt="" />
    </div>
  );
};

export const SignUpPanel = ({isSignUp, setIsSignUp}) => {
  return (
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>Login to your Account to enjoy better experience...</p>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="btn"
          id="sign-in-btn"
        >
          Sign in
        </button>
      </div>
      <img src={registerImg} className="image" alt="" />
    </div>
  );
};

// Main Component

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signInData,setSignInData] = useState({
    username:"",
    password:""
  })
  const [signUpData,setSignUpData] = useState({
    username:"",
    email:"",
    password:""
  })
  return (
    <div className={isSignUp ? "container sign-up-mode" : "container"}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignInForm signInData={signInData} setSignInData={setSignInData} />
          <SignUpForm signUpData={signUpData} setSignUpData={setSignUpData}/>
        </div>
      </div>
      <div className="panels-container">
        <SignInPanel isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
        <SignUpPanel isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
      </div>
    </div>
  );
};

export default Auth;
