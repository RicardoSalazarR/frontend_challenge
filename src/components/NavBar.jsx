import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navbar = () => {
    return (
        <div>
            <Navbar bg="transparent" variant="dark">
                <Container className='navbar-container'>
                    <Navbar.Brand href="">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">Acerca de nosotros</Nav.Link>
                        <Nav.Link href="">¿Como funciona?</Nav.Link>
                        <Nav.Link href="">Contactanos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default navbar;