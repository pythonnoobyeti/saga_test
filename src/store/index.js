import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";

import counterReducer from "../reducers/counterReducer/counterReducer";
import counterSizeReducer from "../reducers/counterSizeReducer/counterSizeReducer";
import swapiReducer from "../reducers/swapiReducer/swapiReducer";

const sagaMiddleware = createSagaMiddleware();

const rootRducer = combineReducers({
  counter: counterReducer,
  counterSize: counterSizeReducer,
  swdata: swapiReducer,
});

const store = createStore(
  rootRducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
