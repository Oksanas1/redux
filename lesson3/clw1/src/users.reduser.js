import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
    usersList: [],
};

const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                usersList: state.usersList.concat(payload.userData),
            };
        case DELETE_USER:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== payload.id),
            };
        case UPDATE_USER:
            return {
                ...state,
                usersList: state.usersList.map(user => user.id === payload.id ? { ...user, ...payload.userData, } : user),
            };
        default:
            return state;
    }
};

export default usersReducer;
