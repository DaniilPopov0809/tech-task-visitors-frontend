import React from "react";
import { Navbar, Container, Nav, Button} from "react-bootstrap";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Logo /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Button variant="primary">
                Sign In
              </Button>
              <Button variant="primary" className="ml-2">Log Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
