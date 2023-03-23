import React, { useState } from 'react'
import { SocialIcons } from '../SocialIcons';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setUserDetails } from '../../../features/authSlice';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
 const [username,setUsername] = useState();
 const [password,setPassword] = useState();
 const [email,setEmail] = useState();
const dispatch = useDispatch()
const navigate = useNavigate();


const handleSubmit = async(e)=>{
  e.preventDefault();
  const response = await axios.post('http://localhost:8000/register',{
    username,
    email,
    password
  })
  const data = await response.data
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
      <form action="#" onSubmit={handleSubmit} className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i class="fas fa-user"></i>
          <input name='username' value={username} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i class="fas fa-envelope"></i>
          <input name='email' value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i class="fas fa-lock"></i>
          <input name='password' value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
        </div>
        <input type="submit" className="btn" value="Sign up" />
        <p className="social-text">Or Sign up with social platforms</p>
         <SocialIcons/>
      </form>
    );
 };
