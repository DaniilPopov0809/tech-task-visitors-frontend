import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperation from "../../redux/auth/operations";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { selectIsLoggedIn, selectUsername } from "../../redux/auth/selectors";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUsername);

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>
              <Logo />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="fs-3">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/visitors" className="fs-3">
              Visitors
            </Nav.Link>
          </Nav>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {isLoggedIn && (
              <span className="text-white me-4 fs-5">Hello, {username}!</span>
            )}
            <Nav>
              <Link to="/login" className="btn btn-primary me-3">
                Log In
              </Link>
              <Link
                to="/logout"
                className="btn btn-primary"
                onClick={() => dispatch(authOperation.logOut())}
              >
                Log Out
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
