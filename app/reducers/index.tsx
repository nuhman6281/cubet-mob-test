import { combineReducers } from "redux";
import coffee from './coffee';
import user from './user';

export default combineReducers({
    user,
    coffee
});