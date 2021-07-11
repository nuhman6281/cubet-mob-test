import {
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS
} from "../actions/action-types";

const INITIAL_STATE = {
    loginResponse: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return {
                ...state
            };
        case LOGIN_USER_FAILURE:
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loginResponse: action.loginResponse,
            };
        default:
            return state;
    };
};