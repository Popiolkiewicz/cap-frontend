import React, { Component } from 'react';
import { Navbar, Nav} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                {/* Header */}
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="/home"> Central Administration Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* Actual content based on URI */}
                <Routes/>

                {/* Footer */}

            </div>
        );
    }
}

export default App;
