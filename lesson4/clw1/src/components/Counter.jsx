import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../counter.actions';

const Counter = ({counter, increment, decrement, reset }) => {
  return (
    <div class="counter">
      <button class="counter__button" onClick={decrement}>-</button>
      <span class="counter__value" onClick={reset}>{counter}</span>
      <button class="counter__button" onClick={increment}>+</button>
    </div>
  );
}

const mapState = state => {
  return ({
    counter: state,
  });
}

const mapDispatch = {
    increment: counterActions.increment,
    decrement: counterActions.decrement,
    reset: counterActions.reset,
};

const connector = connect(mapState, mapDispatch);

export default connector(Counter);