import React from "react";
import "../styles/Login.scss";

const Login = () => {
  return (
    <div classname="Login">
      <div classname="Login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" classname="logo" />
        <form action="/" classname="form">
          <label htmlfor="email" classname="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.cm"
            classname="input input-email"
          />
          <label htmlfor="password" classname="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            classname="input input-password"
          />
          <input
            type="submit"
            defaultvalue="Log in"
            classname="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button classname="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export { Login };
