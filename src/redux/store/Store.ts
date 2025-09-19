import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { persistStore, persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import themeReducer from "../reducers/ThemeReducer";
import accountReducer from "redux/reducers/AccountReducer";
import { DESTROY_SESSION } from "redux/actionConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loaderReducer from "redux/reducers/LoaderReducer";
const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
  userAccount: accountReducer,
  themeReducer: themeReducer,
  loader: loaderReducer,
});

//* white list only those reducers which needs to be stored locally.
const persistConfig = {
  key: "@anandotsavScanner",
  storage: AsyncStorage,
  whitelist: ["themeReducer"],
};

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) state = undefined;
  return reducers(state, action);
};
const presistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(presistedReducer, undefined, middleware);
const persistor = persistStore(store);
export type RootState = ReturnType<typeof reducers>;
export { persistor, store };
