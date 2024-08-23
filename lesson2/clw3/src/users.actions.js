const ADD = 'USERS/ADD';
const DELETE = 'USERS/DELETE';

export const addUser = user => ({ type: ADD, user });
export const deleteUser = id => ({ type: DELETE, id });
