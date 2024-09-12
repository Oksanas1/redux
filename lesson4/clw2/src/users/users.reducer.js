import { ADD_USER, DELETE_USER } from "./users.actions";

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(payload.userData),
    };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(({id}) => id !== payload.id),
      };
    default:
      return state;
  }
}

export default usersReducer;