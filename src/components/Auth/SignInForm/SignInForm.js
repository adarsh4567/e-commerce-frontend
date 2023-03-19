import React, { useState } from "react";
import { SocialIcons } from "../SocialIcons";

export const SignInForm = () => {
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i class="fas fa-user"></i>
        <input
          name="username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
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
