import { UseAppContext } from "../context/app-context";

function NavbarUserText() {
  const [state] = UseAppContext();

  console.log("UserText: Render");
  return <span>Hi, {state.user.name}!</span>;
}

export default NavbarUserText;
