import { compose, createStore } from "redux";
import { rootReducer } from "./Reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage
  // blacklist: ['agenda']
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancers());
export const persistor = persistStore(store);
