import axios from 'axios';
import { CurrencyEndpoint } from 'constants/endpoints';

const API_KEY = '73c94e96e8msh67dc0d25b42a1e3p154d6djsn631505d0b9f2';

export const config = ({
  method,
  baseURL,
  params,
  timeout,
  headers
}) => {
  const body = method === 'get' ? 'params' : 'data';
  const updatedHeaders = Object.assign({}, headers, { // eslint-disable-line lodash/prefer-lodash-method
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'community-neutrino-currency-conversion.p.rapidapi.com',
    'x-rapidapi-key': API_KEY,
  });

  // Create an instance using the config defaults
  const instance = axios.create({
    method,
    baseURL,
    timeout,
    [body]: params || {},
    headers: updatedHeaders
  });

  return instance;
};

export const triggerAjaxRequest = request => request();

export const CurrencyConfig = payload => {
  const { fromCurr, toCurr, amount } = payload;
return config({
    method: 'post',
    baseURL: CurrencyEndpoint,
    params: `from-type=${fromCurr}&to-type=${toCurr}&from-value=${amount}`
  })};