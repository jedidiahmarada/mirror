import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { rootRedcers } from "../reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootRedcers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
