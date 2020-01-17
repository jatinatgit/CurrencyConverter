import { processResponse } from 'utils/common';

describe("Common utils", () => {

  it('should call processResponse', ()=> {
    const result = processResponse({payload: { fromCurr: 'USD', fromAmount: 1, toCurr: 'GBP', }, 'USD_GBP': 1.89})
    expect(result).toEqual({fromAmount: 1, fromCurr: "USD", toAmount: 1.89, toCurr: "GBP"});
  });
});