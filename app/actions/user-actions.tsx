import { LOGIN_USER } from "./action-types";

export function loginUser(payload) {
    return {
        type: LOGIN_USER,
        payload
    }
}