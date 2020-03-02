import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchUsersStart = () => {
  return { type: actionTypes.FETCH_USERS_START };
};

export const fetchUsersSuccess = userArray => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users: userArray
  };
};

// export const selectPageNumber = pageNumber => {
//   return {
//     type: actionTypes.SELECT_PAGE_NUMBER,
//     event: pageNumber
//   };
// };
export const fetchUsers = pageNumber => {
  return dispatch => {
    dispatch(fetchUsersStart());
    // dispatch(selectPageNumber());

    axios
      .get(
        `https://api.github.com/search/users?q=location:Bangalore&page=${pageNumber}&per_page=30`
      )
      .then(response => {
        console.log(response.data);
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// export const searchUserSuccess = user => {
//   return { type: actionTypes.SEARCH_USER_SUCCESS, user: user };
// };

export const filterUser = query => {
  console.log("inaction");
  return dispatch => {
    axios
      .get(`https://api.github.com/search/users?q=${query}+location:Bangalore`)
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
