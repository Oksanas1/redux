import store from './store';
import { decrement, increment } from './counter'

store.subscribe(() => {
    console.log('Текущее состояние:', store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());