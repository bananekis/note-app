export type Auth = {
  name: string;
  email: string;
  password: string;
};

export const initialState = {
  name: "John",
  email: "admin@admin.com",
  password: "admin123",
};

type Action = {
  type: "user";
  payload: Auth;
};

export const authReducer = (state: Auth = initialState, action: Action) => {
  switch (action.type) {
    case "user":
      return action.payload;

    default:
      return state;
  }
};
