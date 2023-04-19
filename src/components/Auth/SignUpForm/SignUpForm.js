import React, { useState } from "react";
import { SocialIcons } from "../SocialIcons";
import { api } from "../../../api";

export const SignUpForm = ({ isSignUp, setIsSignUp }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post("http://localhost:8000/register", {
      username,
      email,
      password,
    });
    await response.data;

    setIsSignUp(!isSignUp);
  };

  return (
    <form action="#" onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i class="fas fa-user"></i>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="input-field">
        <i class="fas fa-envelope"></i>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="input-field">
        <i class="fas fa-lock"></i>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <SocialIcons />
    </form>
  );
};
