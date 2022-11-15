import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";

const NavBar = ({ changeUser }) => {
  return (
    <Navbar
      className="site-nav px-0 mx-0"
      bg="dark"
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant="dark"
    >
      <Container className="px-3" fluid>
        <Navbar.Brand className="site-nav-text" href="/">
          Christian Tannahill
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="site-nav-text">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className="mr-5 hover:text-white site-nav-text"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="mr-5 hover:text-white site-nav-text"
            >
              Past Work
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className="mr-5 hover:text-white site-nav-text"
            >
              Skills
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
