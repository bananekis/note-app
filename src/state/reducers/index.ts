import { Articles, articlesReducer } from "./articlesReducer";
import { Form, formReducer } from "./formReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { searchReducer } from "./searchReducer";
import storage from "redux-persist/lib/storage";

export type RootState = {
  form: Form;
  articles: Articles;
  search: string;
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["articles"],
};

const rootReducer = combineReducers({
  form: formReducer,
  articles: articlesReducer,
  search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);
