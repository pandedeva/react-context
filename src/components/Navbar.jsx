import NavbarLink from "./NavbarLink";
import NavbarUser from "./NavbarUser";

function Navbar() {
  return (
    <nav>
      <NavbarLink>Dashboard</NavbarLink> | <NavbarLink>Products</NavbarLink> |{" "}
      <NavbarLink>
        <NavbarUser />
      </NavbarLink>
    </nav>
  );
}

export default Navbar;
