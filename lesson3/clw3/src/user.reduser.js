import { SET_USER, REMOVE_USER  } from './user.actions';

const initialState = null;

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USER:
            return payload.userData;
        case REMOVE_USER:
            return null;
        default:
            return state;
    }
};

export default userReducer;
