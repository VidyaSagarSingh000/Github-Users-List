import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: [],
  isLoading: false
};

const reducer = (state = initialState, action) => {
  console.log("reducer");
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
    default:
      return state;
  }
};

export default reducer;
