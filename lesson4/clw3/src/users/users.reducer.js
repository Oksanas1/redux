import { PREV_USERS, NEXT_USERS } from "./users.actions";
import users from "./users";

const initialState = {
  usersList: users,
  currentPage: 0,
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case PREV_USERS:
      return {
        ...state,
        currentPage: state.currentPage - 1,
    };
    case NEXT_USERS:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
}

export default usersReducer;