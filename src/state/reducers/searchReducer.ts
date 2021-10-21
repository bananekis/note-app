type Action = {
  type: "search";
  payload: string;
};

export const searchReducer = (state: string = "", action: Action) => {
  switch (action.type) {
    case "search":
      return action.payload;
    default:
      return state;
  }
};
