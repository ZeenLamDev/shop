import React from "react";

import "./Button.styles.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
