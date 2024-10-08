import { legacy_createStore as createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT :
      return state + 1;
    case DECREMENT :
      return state - 1;
    default: 
      return state;
  };
};

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
