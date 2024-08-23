const initialState = {
    usersList: [],
};

const usersReducer = (state = initialState, action) => {
    const { type, user, id } = action;
    switch (type) {
        case 'USERS/ADD':
            return {
                ...state,
                usersList: state.usersList.concat(user),
            };
        case 'USERS/DELETE':
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== id),
            };
        default:
            return state;
    }
};

export default usersReducer;
