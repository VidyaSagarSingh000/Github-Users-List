import React from "react";
import classes from "./searchBar.module.css";

const searchBar = props => {
  return (
    <form>
      <section>
        <input
          type="text"
          placeholder="Enter UserName"
          value={props.value}
          onChange={props.changed}
        />
      </section>
    </form>
  );
};

export default searchBar;
