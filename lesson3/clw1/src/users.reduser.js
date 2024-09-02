const initialState = {
    usersList: [],
};

const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'USERS/ADD':
            return {
                ...state,
                usersList: state.usersList.concat(payload.user),
            };
        case 'USERS/DELETE':
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== payload.id),
            };
        case 'USERS/UPDATE':
            return {
                ...state,
                usersList: state.usersList.map(oldUser => oldUser.id === payload.user.id ? payload.user : oldUser),
            };
        default:
            return state;
    }
};

export default usersReducer;
