/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import BsNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import NavbarLink from "./NavbarLink";

const Links = [
  {
    label: "Inserisci Artista",
    to: "/artist/new",
  },
  {
    label: "Visualizza Artista",
    to: "/artist/artist-name",
  },
  {
    label: "Inserisci Album",
    to: "/album/new",
  },
  {
    label: "Visualizza Album",
    to: "/album/album-name",
  },
];

type NavbarProps = {
  logo: string;
};

const Navbar = ({ logo }: NavbarProps) => {
  return (
    <BsNavbar className="mb-2" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <BsNavbar.Brand as={Link} to="/">
          {logo}
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="" navbar-nav>
          <Nav className="me-auto">
            {Links.map((link) => (
              <NavbarLink key={link.to} {...link} />
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
