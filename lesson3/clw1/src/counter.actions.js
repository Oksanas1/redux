export const INCREMENT_COUNTER = 'COUNTER/INCREMENT';
export const DECREMENT_COUNTER = 'COUNTER/DECREMENT';
export const RESET_COUNTER = 'COUNTER/RESET';

export const incrementCounter = () => ({type: INCREMENT_COUNTER});
export const decrementCounter = () => ({type: DECREMENT_COUNTER});
export const resetCounter = () => ({type: RESET_COUNTER});