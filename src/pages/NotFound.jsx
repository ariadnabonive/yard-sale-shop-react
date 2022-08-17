import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div>
      <h1 classname="title-404">404</h1>
      <p classname="text-404">Oops! Page not found.</p>
      <a classname="button-404" href="/">
        Back to home
      </a>
    </div>
  );
};

export { NotFound };
