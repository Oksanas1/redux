export const DELETE_USER = 'USERS/DELETE';
export const ADD_USER = 'USERS/ADD';

export const addUser = (userData) => ({type: ADD_USER,  payload: { userData, } });
export const deleteUser = (id) => ({type: DELETE_USER, payload: { id, } });
