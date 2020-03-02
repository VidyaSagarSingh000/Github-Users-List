import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: [],
  isLoading: false,
  filteredUser:[]
};

const reducer = (state = initialState, action) => {
  console.log("reudcer");
  switch (action.type) {
    case actionTypes.FETCH_USERS_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users.items,
        isLoading: false
      };
    case actionTypes.SEARCH_USER_SUCCESS:
      return {
        ...state,
        filteredUser:action.user
      };
    default:
      return state;
  }
};

export default reducer;
