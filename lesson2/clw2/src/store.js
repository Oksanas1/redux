import { legacy_createStore as createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

const initialState = {
    value: 0,
    history: [],
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
                history: state.history.concat('+1'),
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
                history: state.history.concat('-1'),
            };
        case RESET:
            return {
                ...state,
                value: 0,
                history: [],
            };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export default store;
