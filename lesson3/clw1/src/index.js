import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { decrementCounter, incrementCounter, resetCounter } from './counter.actions'

store.subscribe(() => {
    console.log('Текущее состояние:', store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 34, name: 'John' }));

store.dispatch(deleteUser(76));
store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(updateUser(76, { name: 'SarahD' }));

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());