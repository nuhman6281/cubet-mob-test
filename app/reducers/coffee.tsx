import {

} from "../actions/action-types";

const INITIAL_STATE = {
    fetchCoffeeResponse: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    };
};