import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="/home"> Central Administration Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default App;
