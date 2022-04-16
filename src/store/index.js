import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import createReducer from "../reducers";
import rootSaga from "../sagas";

const getStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // mount it on the Store
  const store = createStore(createReducer(), applyMiddleware(sagaMiddleware));

  // then run the saga
  sagaMiddleware.run(rootSaga);
  return { store };
};
export default getStore;
