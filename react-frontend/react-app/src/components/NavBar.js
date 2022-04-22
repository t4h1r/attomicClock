import '../App.css';
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";
import logo from '../images/logo.png';

function NavBar() {
  return (
    <div className="App">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Link to="">
            <img width="70px" height="auto" className="img-responsive" src={logo} alt="logo" />
            <Navbar.Brand href="#home">Atomic</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Atomic</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
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
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
