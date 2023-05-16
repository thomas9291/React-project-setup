import classes from "./Main.module.css";

import React from "react";
import Button from "../Button/Button";

const Main = () => {
  return (
    <form className={classes.mainContainer}>
      <h4 className={classes.titleMain}>NEW ENTRY</h4>
      <div className={classes.formItem}>
        <label htmlFor="Motto">Motto</label>

        <input type="text" id="Motto" name="Motto" />
      </div>
      <div className={classes.formItem}>
        <label htmlFor="Notes">Notes</label>

        <textarea name="Notes" id="Notes" cols="20" rows="5"></textarea>
        <Button backgroundColor="green" color="white" className={classes.btn}>
          Create
        </Button>
      </div>
    </form>
  );
};

export default Main;
