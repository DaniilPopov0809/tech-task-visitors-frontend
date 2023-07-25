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
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link as={NavLink} to="/" className="fs-3">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/visitors" className="fs-3">
                Visitors
              </Nav.Link>
            </Nav>
            <Nav>
              {isLoggedIn && (
                <span className="text-white me-4 fs-5">Hello, {username}!</span>
              )}
              
                <Link
                  to="/login"
                  className="btn btn-primary me-3 d-none d-lg-inline-block"
                >
                  Log In
                </Link>
                <Link
                  to="/logout"
                  className="btn btn-primary d-none d-lg-inline-block"
                  onClick={() => dispatch(authOperation.logOut())}
                >
                  Log Out
                </Link>
                <Link to="/login" className="nav-link fs-5 d-lg-none">
                  Log In
                </Link>
                <Link
                  to="/logout"
                  className="nav-link fs-5 d-lg-none"
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
