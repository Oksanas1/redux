import { legacy_createStore as createStore, combineReducers } from 'redux';

import userReducer from './user.reduser';
import languageReducer from './language.reducer';
import cartReducer from './cart.reduser';

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(appReducer);

export default store;
