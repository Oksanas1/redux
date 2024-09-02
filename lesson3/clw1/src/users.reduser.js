import { addUser, deleteUser, updateUser } from './users.actions.js';

const initialState = {
    usersList: [],
};

const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case addUser:
            return {
                ...state,
                usersList: state.usersList.concat(payload.user),
            };
        case deleteUser:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== payload.id),
            };
        case updateUser:
            return {
                ...state,
                usersList: state.usersList.map(oldUser => oldUser.id === payload.user.id ? payload.user : oldUser),
            };
        default:
            return state;
    }
};

export default usersReducer;
