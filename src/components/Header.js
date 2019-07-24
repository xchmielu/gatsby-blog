import React from "react";
import { Navbar, Nav} from "react-bootstrap"
import {Link } from 'gatsby'
export default () => (
<Navbar bg="light" expand="lg" >
  <Navbar.Brand as={Link} to="/">Chmielewski</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/blog/">Blog</Nav.Link>
      <Nav.Link as={Link} to="portfolio">Portfolio</Nav.Link>
      <Nav.Link as={Link} to="o-mnie">O mnie</Nav.Link>
      </Nav>
</Navbar.Collapse>
</Navbar>
)