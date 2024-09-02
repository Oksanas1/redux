const ADD_USER = 'USERS/ADD';
const DELETE_USER = 'USERS/DELETE';
const UPDATE_USER = 'USERS/UPDATE';

export const addUser = user => ({ type: ADD_USER, payload: { user }});
export const deleteUser = id => ({ type: DELETE_USER, payload: { id }});
export const updateUser = user => ({ type: UPDATE_USER, payload: { user } });
