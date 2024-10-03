export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const RESET = 'COUNTER/RESET';

export const incrementCounter = () => ({type: INCREMENT});
export const decrementCounter = () => ({type: DECREMENT});
export const resetCounter = () => ({type: RESET});
