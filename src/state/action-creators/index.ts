import { Auth } from "../reducers/authReducer";
import { Form } from "../reducers/formReducer";

// form

export const setTitle = (data: string) => {
  return (dispatch: any) => {
    dispatch({ type: "title", payload: data });
  };
};

export const setTag = (data: string) => {
  return (dispatch: any) => {
    dispatch({ type: "tag", payload: data });
  };
};

export const setBody = (data: string) => {
  return (dispatch: any) => {
    dispatch({ type: "body", payload: data });
  };
};

export const setId = (data: number) => {
  return (dispatch: any) => {
    dispatch({ type: "id", payload: data });
  };
};

// articles

export const setArticles = (data: Form) => {
  return (dispatch: any) => {
    dispatch({ type: "articles", payload: data });
  };
};

// edit

export const editTitle = (data: string, id: number) => {
  return (dispatch: any) => {
    dispatch({ type: "edit-title", payload: data, id: id });
  };
};

export const editTag = (data: string, id: number) => {
  return (dispatch: any) => {
    dispatch({ type: "edit-tag", payload: data, id: id });
  };
};

export const editBody = (data: string, id: number) => {
  return (dispatch: any) => {
    dispatch({ type: "edit-body", payload: data, id: id });
  };
};

// remove

export const removeArticle = (id: number) => {
  return (dispatch: any) => {
    dispatch({ type: "remove-article", id: id });
  };
};

export const setSearchVal = (value: string) => {
  return (dispatch: any) => {
    dispatch({ type: "search", payload: value });
  };
};

// auth

export const setSignIn = (value: boolean) => {
  return (dispatch: any) => {
    dispatch({ type: "signIn", payload: value });
  };
};

export const setSignOut = (value: boolean) => {
  return (dispatch: any) => {
    dispatch({ type: "signOut", payload: value });
  };
};

export const registerUser = (value: Auth) => {
  return (dispatch: any) => {
    dispatch({ type: "user", payload: value });
  };
};
