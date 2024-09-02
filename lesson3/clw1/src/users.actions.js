export const ADD_USER = 'USERS/ADD';
export const DELETE_USER = 'USERS/DELETE';
export const UPDATE_USER = 'USERS/UPDATE';

export const addUser = userData => ({ type: ADD_USER, payload: { userData }});
export const deleteUser = id => ({ type: DELETE_USER, payload: { id }});
export const updateUser = (id, userData) => ({
  type: UPDATE_USER,
  payload: { id, userData },
});
