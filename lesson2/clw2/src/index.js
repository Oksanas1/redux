import store, { reset, increment, decrement } from './store';
import './index.scss';

const counterResultElement = document.querySelector('.counter__result');
const decrementElement = document.querySelector('[data-action="decrement"]');
const resetElement = document.querySelector('[data-action="reset"]');
const incrementElement = document.querySelector('[data-action="increment"]');

const onDecrement = () => {
    store.dispatch(decrement());
};

const onIncrement = () => {
    store.dispatch(increment());
};

const onReset = () => {
    store.dispatch(reset());
};

resetElement.addEventListener('click', onReset);
incrementElement.addEventListener('click', onIncrement)
decrementElement.addEventListener('click', onDecrement);

store.subscribe(() => {
    const state = store.getState();
    const currentValue = state.value;
    const historyString = state.history.join('');
    counterResultElement.textContent = historyString.length
        ? `${historyString} = ${currentValue}`
        : '';
});
