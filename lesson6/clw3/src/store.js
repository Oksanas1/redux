import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import weatherReducer from './weather/weather.reducer';

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;