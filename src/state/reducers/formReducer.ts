export type Form = {
  id: number;
  title: string;
  tag?: string;
  body: string;
};

export const initialState = {
  id: Math.floor(Math.random() * 1000),
  title: "",
  tag: "",
  body: "",
};

type Action = {
  type: "id" | "title" | "tag" | "body";
  payload: any;
};

export const formReducer = (state: Form = initialState, action: Action) => {
  switch (action.type) {
    case "id":
      return { ...state, id: action.payload };
    case "title":
      return { ...state, title: action.payload };
    case "tag":
      return { ...state, tag: action.payload };
    case "body":
      return { ...state, body: action.payload };
    default:
      return state;
  }
};
