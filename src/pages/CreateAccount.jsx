import React from "react";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div classname="CreateAccount">
      <div classname="CreateAccount-container">
        <h1 classname="title">My account</h1>
        <form action="/" classname="form">
          <div>
            <label htmlfor="name" classname="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Teff"
              classname="input input-name"
            />
            <label htmlfor="email" classname="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.com"
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
          </div>
          <input
            type="submit"
            defaultvalue="Create"
            classname="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export { CreateAccount };
