import { CHANGE_TEXT } from "./users.actions";
import users from "./users";

const initialState = {
  usersList: users,
  filterText: '',
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_TEXT:
      const {text} = action.payload;
      const regExtText = new RegExp(text, 'i');
      return ({
        ...state,
        filterText: text,
        usersList: text.length 
          ? users.filter(user => user.name.search(regExtText) > -1)
          : users,
      });
    default:
      return state;
  }
}

export default usersReducer;