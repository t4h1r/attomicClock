import { Container, Navbar, NavDropdown } from 'react-bootstrap'

function Footer() {
    return (
        <Container>
        <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
          <Container>
          <NavDropdown.Item href="#action3">Alex, Chanel, Daniella, Tahir</NavDropdown.Item>
          </Container>
        </Navbar>
      </Container>
    );
}

export default Footer 