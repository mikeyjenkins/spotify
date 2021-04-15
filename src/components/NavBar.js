import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
        return (
          <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Mikey's Spotify Interface</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">Search</Nav.Link>
              <Nav.Link href="/library">Library</Nav.Link>
              <Nav.Link href="/player">Player</Nav.Link>

            </Nav>
          </Navbar>
        </>
        );
}

export default NavBar