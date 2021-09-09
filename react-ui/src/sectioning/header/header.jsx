import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" eventKey="/home" title="Home">
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/mechanical"
            eventKey="/mechanical"
            title="Mechanical"
          >
            Mechanical
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/electrical"
            eventKey="/electrical"
            title="Electrical"
          >
            Electrical
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/plumbing"
            eventKey="/plumbing"
            title="Plumbing"
          >
            Plumbing
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/lifefiresafety"
            eventKey="lifefiresafety"
            title="Life & Fire Safety"
          >
            Life & Fire Safety
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/commissioning"
            eventKey="/commissioning"
            title="Commissioning"
          >
            Commissioning
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/orsetback"
            eventKey="/orsetback"
            title="O.R. Setback"
          >
            O.R. Setback
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/specifications"
            eventKey="/specifications"
            title="Specifications"
          >
            Specifications
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
