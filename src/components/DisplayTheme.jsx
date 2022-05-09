import { UseThemeContext } from "../context/theme-context";

function DisplayTheme() {
  const [state] = UseThemeContext();

  console.log("DisplayTheme: Render");

  return <div>{state.theme}</div>;
}

export default DisplayTheme;
