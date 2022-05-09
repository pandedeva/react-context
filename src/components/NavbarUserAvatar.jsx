import { UseAppContext } from "../context/app-context";

function NavbarUserAvatar() {
  const [state] = UseAppContext();

  console.log("UserAvatar: Render");

  return <img src={state.user.avatar} alt="avatar" width="50" />;
}

export default NavbarUserAvatar;
