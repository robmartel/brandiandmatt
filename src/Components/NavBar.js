import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Ceremony</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Reception</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Accommodations</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Registry</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">RSVP</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;