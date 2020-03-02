import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div style={{ display:'flex'}}>
      <div className={classes.loader}>Loading...</div>
    </div>
  );
};

export default Spinner;
