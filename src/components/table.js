import React, { Component } from "react";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./searchBar";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//components
import Pagination from "./Pagination";
import { connect } from "react-redux";
import * as actions from "../store/actions/action";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 30
  }
}))(TableCell);

const styles = {
  table: {
    minWidth: 400
  }
};

class table extends Component {
  state = {
    currentPage: 1,
    search: ""
  };
  componentDidMount() {
    
    this.props.onFetchUsers(this.state.currentPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.props.onFetchUsers(this.state.currentPage);
    }
  }

  inputChange = e => {
    this.setState({ search: e.target.value });
  };

  onSubmitHandler = event => {
    if (this.state.search.length > 0) {
        this.props.onFilterUser(this.state.search); //this.state.currentPage
      } else {
        alert("please enter name");
      }
    };

  pageChangeHandler = (event, page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { classes } = this.props;
    // let filteredUsers = this.props.users.filter(user =>
    //   user.login.toLowerCase().includes(this.state.search.toLowerCase())
    // );
    let gitUser = <Spinner />;
    if (!this.props.loading) {
      // if (this.state.search.length > 0) {
      //   gitUser = this.props.users.map(user => (
      //     <TableRow key={user.id}>
      //       <TableCell align="center">
      //         <Avatar
      //           src={user.avatar_url}
      //           alt={user.login}
      //           variant="rounded"
      //         />
      //       </TableCell>
      //       <TableCell align="center">
      //         <Typography variant="subtitle1">{user.login}</Typography>
      //       </TableCell>
      //       <TableCell align="center">
      //         <Typography variant="subtitle1">{user.id}</Typography>
      //       </TableCell>
      //     </TableRow>
      //   ));
      // }
      gitUser = this.props.users.map(user => (
        <TableRow key={user.id}>
          <TableCell align="center">
            <Avatar src={user.avatar_url} alt={user.login} variant="rounded" />
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1">{user.login}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1">{user.id}</Typography>
          </TableCell>
        </TableRow>
      ));
    }
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SearchBar
          changed={this.inputChange}
          value={this.state.search}
          onSubmit={event => this.onSubmitHandler(event)}
        />
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">
                    <Typography variant="h6">Avatar</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="h6">Name</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="h6">UserId</Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{gitUser}</TableBody>
            </Table>
          </TableContainer>
        </div>
        <Pagination
          pageChange={(event, page) => this.pageChangeHandler(event, page)}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: page => dispatch(actions.fetchUsers(page)),
    onFilterUser: (query) => dispatch(actions.filterUser(query)) //
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(table));
