import {
    FETCH_COFFEE_DETAILS, FETCH_COFFEE_DETAILS_FAILURE, FETCH_COFFEE_DETAILS_SUCCESS
} from "../actions/action-types";

const INITIAL_STATE = {
    fetchCoffeeResponse: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_COFFEE_DETAILS:
            return {
                ...state
            };
        case FETCH_COFFEE_DETAILS_FAILURE:
        case FETCH_COFFEE_DETAILS_SUCCESS:
            return {
                ...state,
                fetchCoffeeDetailsListResponse: action.fetchCoffeeDetailsListResponse,
            };
        default:
            return state;
    };
};