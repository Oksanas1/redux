import { legacy_createStore as createStore } from 'redux';

export const increment = {
  type: 'COUNTER/INCREMENT',
};

export const decrement = {
  type: 'DECREMENT',
};

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);

store.dispatch(increment);
store.dispatch(decrement);
