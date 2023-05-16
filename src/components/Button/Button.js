import classes from "./Button.module.css";

import React from "react";

const Button = ({ children, color, backgroundColor }) => {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor }}
      className={classes.btn}
    >
      {children}
    </button>
  );
};

export default Button;
