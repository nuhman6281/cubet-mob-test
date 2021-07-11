import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_COFFEE_DETAILS,
  FETCH_COFFEE_DETAILS_FAILURE,
  FETCH_COFFEE_DETAILS_SUCCESS
} from '../actions/action-types';
import { CoffeeApi } from '../api/coffee';
import I18n from 'i18n-js';


function* fetchCoffeeDetailsList({ payload }) {
  try {
    const fetchCoffeeDetailsListResponse = yield call(CoffeeApi.fetchCoffeeDetails, payload);
    if ("drinks" in fetchCoffeeDetailsListResponse) {
      yield put({ type: FETCH_COFFEE_DETAILS_SUCCESS, 'fetchCoffeeDetailsListResponse': { success: true, data: fetchCoffeeDetailsListResponse } });
    } else {
      yield put({ type: FETCH_COFFEE_DETAILS_FAILURE, 'fetchCoffeeDetailsListResponse': { success: false, errorMsg: I18n.t('app_common.common_error') } })
    }
  } catch (e) {
    yield put({ type: FETCH_COFFEE_DETAILS_FAILURE, 'fetchCoffeeDetailsListResponse': { success: false, errorMsg: I18n.t('app_common.common_error') } })
  }
}


function* CoffeeSaga() {
  yield all([
    // @ts-ignore
    takeLatest(FETCH_COFFEE_DETAILS, fetchCoffeeDetailsList),
  ])
}

export default CoffeeSaga;