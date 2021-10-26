import { Action } from "../actions";
import { Form } from "./formReducer";

export type Articles = {
  id: number;
  title: string;
  tag?: string;
  body: string;
}[];

export const articlesReducer = (state: Articles = [], action: Action) => {
  switch (action.type) {
    case "articles":
      return [...state, action.payload];

    case "edit-title":
      const editedTitle = state.map((articles) => {
        if (articles.id === action.id) {
          return { ...articles, title: action.payload };
        } else return articles;
      });

      return editedTitle;

    case "edit-tag":
      const editedTag = state.map((articles) => {
        if (articles.id === action.id) {
          return { ...articles, tag: action.payload };
        } else return articles;
      });

      return editedTag;

    case "edit-body":
      const editedBody = state.map((articles) => {
        if (articles.id === action.id) {
          return { ...articles, body: action.payload };
        } else return articles;
      });

      return editedBody;

    case "remove-article":
      return state.filter((article) => article.id !== action.id);

    default:
      return state;
  }
};
