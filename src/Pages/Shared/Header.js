import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { saveAs } from "file-saver";

const Header = () => {

    const handleDownloadResume = () => {
        saveAs(process.env.PUBLIC_URL + "/resource/Pushpita Nandy Resume-updated.pdf", "Pushpita Nandy Resume.pdf");
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Pushpita Nandy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/contactMe">Contact Me</Nav.Link>
                        </Nav>
                        <Nav>
                            <button onClick={handleDownloadResume} className='btn btn-link text-light text-decoration-none'>Download Resume</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;