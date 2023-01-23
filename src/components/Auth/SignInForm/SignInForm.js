import React from 'react'
import { SocialIcons } from '../SocialIcons';

export const SignInForm = ({signInData,setSignInData}) => {
  const handleSignIn = (e)=>{
     const {name,value} = e.target;
     setSignInData(()=>{
      return {
        ...signInData,
        [name]:value
      }
     })
  }
    return (
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i class="fas fa-user"></i>
          <input value={signInData.username} onChange={handleSignIn} name='username' type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input value={signInData.password} onChange={handleSignIn} name='password' type="password" placeholder="Password" />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn solid"
        />
        <p className="social-text">Or Sign in with social platforms</p>
         <SocialIcons/>
      </form>
    );
  };