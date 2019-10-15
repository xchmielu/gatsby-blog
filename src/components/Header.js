import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
export default () => (
  <Navbar expand="lg">
    <Navbar.Brand as={Link} to="/" className="logo">
      Chmielewski
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="blog">
          blog
        </Nav.Link>
        <Nav.Link as={Link} to="portfolio">
          portfolio
        </Nav.Link>
        <Nav.Link as={Link} to="about">
          about
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
