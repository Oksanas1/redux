import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
    console.log('Текущее состояние:', store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 34, name: 'John' }));

store.dispatch(deleteUser(76));