import React, { useState } from "react";
import "./auth.css";
import registerImg from '../../assets/register.svg'
import loginImg from '../../assets/login.svg'

const Auth = () => {
  const [isSignUp,setIsSignUp] = useState(false);
  return (
    <div className={isSignUp ? "container sign-up-mode":"container"}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input onClick={(e)=>{
              e.preventDefault();
              setIsSignUp(!isSignUp);
            }} type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a  class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a  class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a  class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a  class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a  class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a  class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a  class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div class="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Register with us to continue your shopping...
            </p>
            <button onClick={()=> setIsSignUp(!isSignUp)} className="btn transparent secondary-btn" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={loginImg} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Login to your Account to enjoy better experience...
            </p>
            <button onClick={()=> setIsSignUp(!isSignUp)} className="btn transparent secondary-btn" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={registerImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
