import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleGoogleSignIn, initializeFirebase } from './loginManagement';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext, UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

initializeFirebase();

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/home" } };

    return (
        <div className="loginField">
            <h1>User LogIn</h1>
            <button onClick={googleSignIn} className="btn btn-warning btn-lg mt-5">Sign In With GOOGLE</button>
        </div>
    );
};

export default Login;