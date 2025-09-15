import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function NavbarCom() {
  const navigate = useNavigate();
  const Toggle = () => {
    navigate("/account");
  };
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto ms-auto gap-4">
            <Link to="/">home </Link>
            <Link to="/about">About us </Link>
            <Link to="/account">Account </Link>
            <a onClick={Toggle}>Account</a>
            <Link to="/contact">Contact </Link>
            <Link to="/user/manoj">User</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCom;
