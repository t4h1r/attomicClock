import '../App.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";
import logo from '../images/logo.png';

function NavBar() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link to="">
            <img width="70px" height="auto" className="img-responsive" src={logo} alt="logo" />
            <Navbar.Brand href="#home">Atomic</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/productListings">
                <Nav.Link href="#action1">Product Listings</Nav.Link>
              </Link>
              <Link to="/accountDetails">
                <Nav.Link href="#action2">Account Details</Nav.Link>
              </Link>
              <Link to="/orders">
                <Nav.Link href="#action6">Orders</Nav.Link>
              </Link>
              <Link to="/ops">
                <Nav.Link href="#action7">Online Purchasing System</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Button variant="outline-success">Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
