import store from './store';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions'
import { setLanguage } from './language.actions'

store.subscribe(() => {
    console.log('Текущее состояние:', store.getState());
});

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(setLanguage('jp'));
store.dispatch(removeProduct(76));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());