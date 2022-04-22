import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="light" expand="lg" className="navigation">
      <Container>
        <Navbar.Brand>Heather Johnsick</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={() => handlePageChange("About")}>
              About me
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link href="#resume" onClick={() => handlePageChange("Resume")}>
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
