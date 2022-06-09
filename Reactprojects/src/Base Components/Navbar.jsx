import React, { Component } from "react";
import { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Navigationbar = ({ Title }) => {
  return (
    <React.Fragment>
      <Navbar className="px-3" bg="dark" expand="lg">
        <Navbar.Brand className=" mx-5  navbar-brand text-light">
          <h5 className="m-auto navbar-brand text-light"> eCommerce{Title}</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className=" text-light mx-2 " as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className=" text-light mx-2 " as={Link} to="/myorders">
              My orders
            </Nav.Link>
            <Nav.Link className=" text-light mx-2 " as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    Title: state.shop.Title,
  };
};
export default connect(mapStateToProps, null)(Navigationbar);
