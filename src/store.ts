import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./redux/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
  }
}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

export default store;
