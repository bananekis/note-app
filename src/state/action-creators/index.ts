import { Action } from "../actions";
import { Dispatch } from "redux";
import { Form } from "../reducers/formReducer";

// form

export const setTitle = (data: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "title", payload: data });
  };
};

export const setTag = (data: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "tag", payload: data });
  };
};

export const setBody = (data: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "body", payload: data });
  };
};

export const setId = (data: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "id", payload: data });
  };
};

// articles

export const setArticles = (data: Form) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "articles", payload: data });
  };
};

// edit

export const editTitle = (data: string, id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "edit-title", payload: data, id: id });
  };
};

export const editTag = (data: string, id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "edit-tag", payload: data, id: id });
  };
};

export const editBody = (data: string, id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "edit-body", payload: data, id: id });
  };
};

// remove

export const removeArticle = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "remove-article", id: id });
  };
};

export const setSearchVal = (value: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: "search", payload: value });
  };
};
