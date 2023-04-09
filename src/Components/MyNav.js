import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class MyNav extends Component{

    render(){
        return(
            <Navbar bg="success" expand="lg">
                <Container>
                <Navbar.Brand href="#home">First, Last Name</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/#projects">Projects</Nav.Link>
                    <Nav.Link href="/#experince">Experince</Nav.Link>
                    <Nav.Link href="/#skills">Skills</Nav.Link>
                    <Nav.Link href="/#education">Education</Nav.Link>
                    <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
      
        );
    }
}



export default MyNav;