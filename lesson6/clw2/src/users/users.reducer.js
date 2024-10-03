import { SHOW_SPINNER, USER_DATA_RECIEVED } from "./users.actions";

const initialState = {
  users: {
    userData: null,
    isFetching: false,
  },
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_SPINNER:
      return {
        users: {
          ...state.users,
          isFetching: action.payload.isShowSpinner},
      };
    case USER_DATA_RECIEVED:
      return {
        users: {
          ...state.users,
          isFetching: false,
          userData: action.payload.userData,
        },
      };
    default:
      return state;
  }
}

export default usersReducer;