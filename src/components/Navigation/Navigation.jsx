import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">

      <Navbar id="menu" variant="dark" fixed="bottom" expand="lg">
      <Navbar.Brand href="/">next chapter high.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/homeroom">homeroom</Nav.Link>
      <Nav.Link href="/lab">computer lab</Nav.Link>
      <Nav.Link href="/radio">school radio</Nav.Link>
      <Nav.Link href="/library">library</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default Navigation;
