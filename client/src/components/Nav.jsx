import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AuthService from "../utils/AuthService"; // Ensure this path is correct

const NavTabs = () => {
  const currentPage = useLocation().pathname;
  const user = AuthService.getProfile();

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">Elise Johnson Realtor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={currentPage === "/"}>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutMe" active={currentPage === "/aboutMe"}>About Me</Nav.Link>
            <Nav.Link as={Link} to="/buying" active={currentPage === "/buying"}>Buying</Nav.Link>
            <Nav.Link as={Link} to="/selling" active={currentPage === "/selling"}>Selling</Nav.Link>
            <Nav.Link href="https://www.coldwellbankerhomes.com/mn/woodbury/agent/elise-johnson/aid_277035/listings/" target="_blank">
              Current Listings
            </Nav.Link>
            <Nav.Link href="https://www.coldwellbankerhomes.com/mn/woodbury/agent/elise-johnson/aid_277035/" target="_blank">
              Contact Me
            </Nav.Link>
            {!user ? (
              <Nav.Link as={Link} to="/login" active={currentPage === "/login"}>Login/Register</Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavTabs;
