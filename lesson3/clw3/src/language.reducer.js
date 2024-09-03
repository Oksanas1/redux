import { SET_LANGUAGE  } from './language.actions';

const initialState = 'en';

const languageReducer = (state = initialState, action) => {
  return action.type === SET_LANGUAGE ? action.payload.language : state;
};

export default languageReducer;