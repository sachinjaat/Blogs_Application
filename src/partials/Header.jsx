import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Header() {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
    >
      <div className="container">
        <ReactBootStrap.Navbar.Brand className="theme">
          DAILY JOURNAL
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ml-auto"
        />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="ml-auto">
            <ReactBootStrap.Nav.Link className="link" href="/">
              Home
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="link" href="/about">
              About
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="link" href="/contact">
              Contact
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="link" href="/compose">
              Compose
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </div>
    </ReactBootStrap.Navbar>
  );
}

export default Header;
