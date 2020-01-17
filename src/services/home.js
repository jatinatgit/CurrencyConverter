import { CURRENCY_CONVERT_REQUEST } from 'constants/actions';

/**
 * convertCurrency request
 * @param {*} payload
 */
export const convertCurrency = payload => dispatch =>
 dispatch({
    type: CURRENCY_CONVERT_REQUEST,
    payload,
  });

export default {};