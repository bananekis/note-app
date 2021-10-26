import { Form } from "../reducers/formReducer";

interface Articles {
  type: "articles" | "edit-title" | "edit-tag" | "edit-body" | "remove-article";
  payload?: Form | string;
  id?: number;
}

interface Formular {
  type: "id" | "title" | "tag" | "body";
  payload: string | number;
}

interface Search {
  type: "search";
  payload: string;
}

export type Action = Articles | Articles | Formular | Search;
