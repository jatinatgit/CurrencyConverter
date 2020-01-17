import * as sagas from 'sagas';
import values from 'lodash/values';
import forEach from 'lodash/forEach';


export const initSagas = (sagaMiddleware) => {
  forEach(values(sagas), sagaMiddleware.run.bind(sagaMiddleware));
};

export default {};
