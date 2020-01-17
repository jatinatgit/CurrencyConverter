import Reducers from 'reducers/home';
import { CurrencyActions } from 'actions';

describe('Currency reducer', () => {
  it('should handle currency convert request action', () => {
    const initState = {
    };
    const action = {
      ...CurrencyActions.currencyConvertRequest(),
    };
    const result = Reducers(initState, action);
    expect(result).toEqual({ loading: true });
  });

  it('should handle currency convert response action', () => {
    const initState = {
      dataList: []
    };
    const action = {
      ...CurrencyActions.currencyConvertResponse(),
      payload: {payload: { fromCurr: 'USD', fromAmount: 1, toCurr: 'GBP', }, 'USD_GBP': 1.89}
    };
    const result = Reducers(initState, action);
  });

  it('should handle currency convert failure action', () => {
    const initState = {
    };
    const action = {
      ...CurrencyActions.currencyConvertFailure(),
    };
    const result = Reducers(initState, action);
  });
})