import React from "react";
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from './counter.actions';

const Counter = ({ counter, incrementCounter, decrementCounter, resetCounter }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrementCounter}>-</button>
      <span className="counter__value" onClick={resetCounter}>{counter}</span>
      <button className="counter__button" onClick={incrementCounter}>+</button>
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return { counter: state };
};

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  resetCounter
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Counter);