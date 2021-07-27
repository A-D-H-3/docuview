import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="bottom"
    >
      <Container>
        <Navbar.Text>Copyright 2021</Navbar.Text>
        <Nav.Link href="https://www.houstonmethodist.org/locations/sugar-land/">
          HMSL
        </Nav.Link>
        <Navbar.Text>Credits</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
