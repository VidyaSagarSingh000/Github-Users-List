import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";


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
