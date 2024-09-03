import { legacy_createStore as createStore } from 'redux';
import counterReducer from './counter.js';

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
