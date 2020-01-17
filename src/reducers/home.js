import { CURRENCY_CONVERT_REQUEST, CURRENCY_CONVERT_RESPONSE, CURRENCY_CONVERT_FAILURE } from 'constants/actions';
import { processResponse } from 'utils/common';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case CURRENCY_CONVERT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CURRENCY_CONVERT_RESPONSE:
      state.dataList.push(processResponse(action.payload));
      return {
        ...state,
        loading: false,
        result: action.payload.response,
      };
    case CURRENCY_CONVERT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
};