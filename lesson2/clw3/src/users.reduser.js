const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    const { type, user, id } = action;
    switch (type) {
        case 'USERS/ADD':
            return {
                ...state,
                users: state.users.concat(user),
            };
        case 'USERS/DELETE':
            return {
                ...state,
                users: state.users.filter(user => user.id !== id),
            };
        default:
            return state;
    }
};

export default usersReducer;
