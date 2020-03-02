import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";

class pagination extends Component {
  render() {
    return (
      <div style={{ display: "flex", margin: " 30px auto" }}>
        <Pagination
          count={34}
          color="secondary"
          size="large"
          onChange={this.props.pageChange}
          page={this.props.currentPage}
        />
      </div>
    );
  }
}

export default pagination;
