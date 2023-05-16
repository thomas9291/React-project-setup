import classes from "./Main.module.css";

import React from "react";

const Main = () => {
  return (
    <form className={classes.mainContainer}>
      <div className={classes.formItem}>
        <label htmlFor="Motto">Motto</label>
        <br />
        <input type="text" id="Motto" name="Motto" />
      </div>
      <div className={classes.formItem}>
        <label htmlFor="Notes">Notes</label>
        <br />
        <textarea name="Notes" id="Notes" cols="20" rows="5"></textarea>
        <button>click me</button>
      </div>
    </form>
  );
};

export default Main;
