// file ini berguna untuk memisahkan pada saat komponen lain di render, komponen theme tidak dirender
import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext({});

export const UseThemeContext = () => {
  return useContext(ThemeContext);
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLETHEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    default:
      throw new Error(`unexpected action type: ${action.type}`);
  }
}

const initialState = {
  theme: "dark",
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // menggunakan destructuring array, agar bisa dikirim ke file lain
  const themeContextValue = [state, dispatch];

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};
