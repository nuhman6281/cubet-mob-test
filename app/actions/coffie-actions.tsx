import { FETCH_COFFEE_DETAILS } from "./action-types";

export function fetchCoffeeDetail(payload) {
    return {
        type: FETCH_COFFEE_DETAILS,
        payload
    }
}