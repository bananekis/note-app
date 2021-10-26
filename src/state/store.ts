import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import reducers from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default { store, persistor };
