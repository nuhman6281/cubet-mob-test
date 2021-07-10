import { fork, all } from 'redux-saga/effects';
import CoffeeSaga from './coffee-saga';
import UserSaga from './user-saga';


export default function* rootSaga() {
    yield all([
        fork(CoffeeSaga),
        fork(UserSaga)
    ]);
}

