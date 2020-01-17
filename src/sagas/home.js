import { call, put, takeEvery } from 'redux-saga/effects';
import { CurrencyConfig, triggerAjaxRequest } from './api';
import { CURRENCY_CONVERT_REQUEST, CURRENCY_CONVERT_RESPONSE, CURRENCY_CONVERT_FAILURE } from 'constants/actions';

export function* convertCurrency(requestPayload) {
  const { payload } = requestPayload;
  const config = CurrencyConfig(payload);
  try {
    const response = yield call(triggerAjaxRequest, config);
    yield put({ type: CURRENCY_CONVERT_RESPONSE, payload: {...requestPayload, ...response.data } });
  } catch (e) {
    yield put({ type: CURRENCY_CONVERT_FAILURE, message: e.message });
  }
}

export function* homeSaga() {
  yield takeEvery(CURRENCY_CONVERT_REQUEST, convertCurrency);
}

