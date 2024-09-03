export const ADD_PRODUCT = 'PRODUCT/ADD';
export const REMOVE_PRODUCT = 'PRODUCT/REMOVE';

export const addProduct = productData => ({ type: ADD_PRODUCT, payload: { productData }});
export const removeProduct = id => ({ type: REMOVE_PRODUCT, payload: { id }});
