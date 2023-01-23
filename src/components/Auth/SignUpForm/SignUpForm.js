import React from 'react'
import { SocialIcons } from '../SocialIcons';

export const SignUpForm = ({signUpData,setSignUpData}) => {
  const handleSignUp = (e)=>{
     const {name,value} = e.target;
     setSignUpData(()=>{
      return {
        ...signUpData,
        [name]:value
      }
     })
  }
    return (
      <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i class="fas fa-user"></i>
          <input value={signUpData.username} onChange={handleSignUp} name='username' type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i class="fas fa-envelope"></i>
          <input value={signUpData.email} onChange={handleSignUp} name='email' type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i class="fas fa-lock"></i>
          <input value={signUpData.password} onChange={handleSignUp} name='password' type="password" placeholder="Password" />
        </div>
        <input type="submit" className="btn" value="Sign up" />
        <p className="social-text">Or Sign up with social platforms</p>
         <SocialIcons/>
      </form>
    );
 };
