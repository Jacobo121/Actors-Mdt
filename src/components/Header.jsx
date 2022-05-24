import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import Slides from './Slides';

const Header = () => {
    return (
        <>
            <Container>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Container>
                    <Navbar.Brand href="#">Movies</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>

            <Slides />
        </>
    );
}

export default Header;