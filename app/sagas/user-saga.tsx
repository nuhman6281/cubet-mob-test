import { all, call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from '../actions/action-types';
import { UserApi } from '../api/user';
import I18n from 'i18n-js';


function* loginUser({ payload }) {
  try {
    const loginResponse = yield call(UserApi.login, payload);
    if (loginResponse) {
      yield put({ type: LOGIN_USER_SUCCESS, 'loginResponse': { success: true, data: loginResponse } });
    } else {
      yield put({ type: LOGIN_USER_FAILURE, 'loginResponse': { success: false, errorMsg: I18n.t('app_common.common_error') } })
    }
  } catch (e) {
    yield put({ type: LOGIN_USER_FAILURE, 'loginResponse': { success: false, errorMsg: I18n.t('app_common.common_error') } })
  }
}


function* UserSaga() {
  yield all([
    // @ts-ignore
    takeLatest(LOGIN_USER, loginUser),
  ])
}

export default UserSaga;