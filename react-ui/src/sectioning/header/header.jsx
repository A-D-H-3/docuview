// import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/mechanical">Mechanical</Nav.Link>
          <Nav.Link href="/electrical">Electrical</Nav.Link>
          <Nav.Link href="/plumbing">Plumbing</Nav.Link>
          <Nav.Link href="/lifefiresafety">Life & Fire Safety</Nav.Link>
          <Nav.Link href="/commissioning">Commissioning</Nav.Link>
          <Nav.Link href="/orsetback">O.R. Setback</Nav.Link>
          <Nav.Link href="/specifications">Specifications</Nav.Link>
          <Greeting />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
