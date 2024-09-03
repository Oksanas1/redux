export const SET_USER = 'USERS/SET';
export const REMOVE_USER = 'USERS/REMOVE';

export const setUser = userData => ({ type: SET_USER, payload: { userData }});
export const removeUser = () => ({ type: REMOVE_USER });
