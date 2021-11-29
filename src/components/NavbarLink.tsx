import { useLocation } from "react-router";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

type NavbarLinkProps = {
  label: string;
  to: string;
};
const NavbarLink = ({ label, to }: NavbarLinkProps) => {
  const { pathname } = useLocation();

  return (
    <Nav.Link as={Link} to={to} active={pathname === to}>
      {label}
    </Nav.Link>
  );
};

export default NavbarLink;
