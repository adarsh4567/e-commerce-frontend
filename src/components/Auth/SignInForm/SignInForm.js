import React, { useState } from "react";
import { SocialIcons } from "../SocialIcons";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import axios from "axios";
import { setUserDetails } from "../../../features/authSlice";
import { api } from "../../../api";

export const SignInForm = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = async(e)=> {
    e.preventDefault();
    const response = await api.post('http://localhost:8000/login',{
      email,
      password
    })
    const data = await response.data;
    if(data){
      dispatch(setUserDetails({
        name:data.username,
        email:data.email,
        token:data.token
      }))
      navigate('/')
    }
    

  }
  return (
    <form action="#" onSubmit={handleLogin} className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i class="fas fa-user"></i>
        <input
          name="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          name="password"
          onChange={(e) =>
           setPassword(e.target.value)
          }
          value={password}
          type="password"
          placeholder="Password"
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <SocialIcons />
    </form>
  );
};
