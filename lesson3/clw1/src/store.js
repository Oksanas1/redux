import { legacy_createStore as createStore, combineReducers } from 'redux';

import usersReducer from './users.reduser';
import counterReducer from './counter.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  user: usersReducer,
});

const store = createStore(appReducer);

export default store;
