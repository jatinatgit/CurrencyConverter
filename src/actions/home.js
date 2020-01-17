import { createAction } from "redux-actions";
import * as ActionTypes from "constants/actions";

export const currencyConvertRequest = createAction(ActionTypes.CURRENCY_CONVERT_REQUEST);
export const currencyConvertResponse = createAction(ActionTypes.CURRENCY_CONVERT_RESPONSE);
export const currencyConvertFailure = createAction(ActionTypes.CURRENCY_CONVERT_FAILURE);

export default {}