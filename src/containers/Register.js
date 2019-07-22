import React, { Component } from 'react';
import './Register.css';

class Register extends Component {

    render() {
        return (
            <div className="Register">
                Welcome to <h1>Registration page</h1>
                API URL: {process.env.REACT_APP_DEV_API_URL} 
            </div>
        );
    }
};

export default Register;