const CHANGE_THEME = "theme/reducer/CHANGE_THEME";

export const changeTheme = (payload: any) => {
  return {
    type: CHANGE_THEME,
    payload,
  };
};

const theme = (state = "light", action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export default theme;
