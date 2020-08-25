import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import theme from "./theme";
import localization from "./localization";
let store;

const composeEnhancers =
  typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

store = createStore(
  combineReducers({
    theme,
    localization,
  }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export type Store = ReturnType<typeof store>
export default store as Store;
