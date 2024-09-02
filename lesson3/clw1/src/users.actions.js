export const ADD_USER = 'USERS/ADD';
export const DELETE_USER = 'USERS/DELETE';
export const UPDATE_USER = 'USERS/UPDATE';

export const addUser = user => ({ type: ADD_USER, payload: { user }});
export const deleteUser = id => ({ type: DELETE_USER, payload: { id }});
export const updateUser = user => ({ type: UPDATE_USER, payload: { user } });
