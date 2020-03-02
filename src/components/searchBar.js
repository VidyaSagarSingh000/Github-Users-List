import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./searchBar.module.css";

const searchBar = props => {
  return (
    <section>
      <input
        type="text"
        placeholder="Enter UserName"
        value={props.value}
        onChange={props.changed}
      />
      <span onClick={props.onSubmit}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </span>
    </section>
  );
};

export default searchBar;
