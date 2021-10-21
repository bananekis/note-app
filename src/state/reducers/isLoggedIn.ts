type Action = {
  type: "signIn" | "signOut";
  payload: boolean;
};

export const isLoggedIn = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case "signIn":
      return true;

    case "signOut":
      return false;

    default:
      return state;
  }
};
