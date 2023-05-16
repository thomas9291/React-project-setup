import classes from "./Main.module.css";

import React from "react";
import Button from "../Button/Button";

const Main = () => {
  return (
    <form className={classes.mainContainer}>
      <div className={classes.formItem}>
        <label htmlFor="Motto">Motto</label>

        <input type="text" id="Motto" name="Motto" />
      </div>
      <div className={classes.formItem}>
        <label htmlFor="Notes">Notes</label>

        <textarea name="Notes" id="Notes" cols="20" rows="5"></textarea>
        <Button backgroundColor="green" color="white" className={classes.btn}>
          click me
        </Button>
      </div>
    </form>
  );
};

export default Main;
