export const processResponse = payload => {
  const { payload: data } = payload;
  return { ...data, toAmount: payload['result-float'] };
}

export default {};