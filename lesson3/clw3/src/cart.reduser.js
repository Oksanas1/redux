import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
    products: [],
};

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: state.products.concat(payload.productData),
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== payload.id),
            };
        default:
            return state;
    }
};

export default cartReducer;
