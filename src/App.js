import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";
import Spinner from "./components/Spinner/Spinner";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

//Current Post
// const indexOfLastUser = currentPage * rowsPerPage;
// const indexOfFirstUser = indexOfLastUser - rowsPerPage;
// const currentUsers = users.slice

export default App;
