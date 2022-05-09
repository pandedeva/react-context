import { createContext, useContext } from "react";
import { useEffect, useReducer } from "react";

export const AppContext = createContext({});

export const UseAppContext = () => {
  return useContext(AppContext);
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATEUSER":
      // action.payload untuk nilai baru yang dimasukin user
      return { ...state, user: action.payload };
    case "TOGGLETHEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    default:
      throw new Error(`unexpected action type: ${action.type}`);
  }
}

const initialState = {
  user: {},
  theme: "dark",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [user, setUser] = useState({});
  // const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const user = {
      name: "KONTOLODON",
      avatar: "https://randomuser.me/api/portraits/men/80.jpg",
    };

    // untuk update data user
    dispatch({
      type: "UPDATEUSER",
      payload: user,
    });
  }, []);

  // menggunakan destructuring array, agar bisa dikirim ke file lain
  const appContextValue = [state, dispatch];

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};
