import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { decrement, increment, reset } from './counter.actions'

store.subscribe(() => {
    console.log('Текущее состояние:', store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 34, name: 'John' }));

store.dispatch(deleteUser(76));
store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(updateUser(76, { name: 'SarahD' }));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());