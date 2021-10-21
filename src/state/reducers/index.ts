import { Articles, articlesReducer } from "./articlesReducer";
import { Auth, authReducer } from "./authReducer";
import { Form, formReducer } from "./formReducer";
import { combineReducers } from "redux";
import { isLoggedIn } from "./isLoggedIn";
import { searchReducer } from "./searchReducer";

export type RootState = {
  form: Form;
  articles: Articles;
  search: string;
  user: Auth;
  isLoggedIn: boolean;
};

export const reducers = combineReducers<RootState>({
  form: formReducer,
  articles: articlesReducer,
  search: searchReducer,
  user: authReducer,
  isLoggedIn: isLoggedIn,
});
