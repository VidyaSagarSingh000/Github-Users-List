import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";

class pagination extends Component {

  render() {
    const totalCount = 58153;
    const usersPerPage = 30;
    const count = Math.ceil(totalCount / usersPerPage);
    return (
      <div style={{ display: "flex", margin: " 30px auto" }}>
        <Pagination count={count} color="secondary" size="large" onChange={this.props.pageChange} page={this.props.currentPage}/>
      </div>
    );
  }
}   

export default pagination;
