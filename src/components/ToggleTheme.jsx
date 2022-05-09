import { UseThemeContext } from "../context/theme-context";

function ToggleTheme() {
  const [, dispatch] = UseThemeContext();

  return <button onClick={() => dispatch({ type: "TOGGLETHEME" })}>Toggle Theme</button>;
}

export default ToggleTheme;
