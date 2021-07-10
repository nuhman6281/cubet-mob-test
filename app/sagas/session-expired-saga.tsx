import { put } from 'redux-saga/effects';
import {
    CLEAR_GLOBAL_STORE
} from '../actions/action-types';

export function* redirectToLogin() {
    yield put({ type: CLEAR_GLOBAL_STORE });
}