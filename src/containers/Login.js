import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.css';
import * as queryString from 'query-string';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 
            && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const parsedQueryString = queryString.parse(window.location.search);
        console.log(parsedQueryString);
        console.log(window.location.search);

        const authBasic = { 
            'Authorization': 'Basic ' + btoa(this.state.username + ':' + this.state.password), 
            'Accept': 'text/html' 
        };
        const requestOptions = {
            method: 'GET',
            headers: authBasic
        };

        return fetch(
                process.env.REACT_APP_DEV_API_URL + 
                '/oauth/authorize' + 
                window.location.search + 
                process.env.REACT_APP_DEV_CLIENT_ID, 
                requestOptions
            ).then(this.handleResponse);
    }

    handleResponse(response) {
        return response.text().then(text => {
            window.alert(text);
            if (!response.ok) {
                if (response.status === 401) {
                    window.alert("401!");
                }

                const error = response.statusText;
                return Promise.reject(error);
            }
            else {
                if (response.status === 200) {
                    window.alert('Redirecting...');
                    window.location = response.url;
                };
            }
            return null;
        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
};

export default Login;