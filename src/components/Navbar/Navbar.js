import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="navBarDiv d-flex justify-content-between p-3">
            <div className="navLogo">
                <h3>Series Freak</h3>
                <p>BUY YOUR FAVORITE SERIES IN CHEAPEST RATE!</p>
            </div>
            <div className="d-flex flex-row bd-highlight mb-3 navItems">
                <Link to="/home"><button className="loginBtn btn btn-info">Home</button></Link>
                <Link to="/addproducts"><button className="loginBtn btn btn-info">Admin</button></Link>
                <Link to="/orders"><button className="loginBtn btn btn-info">Orders</button></Link>
                { loggedInUser.email ? <button className="loginBtn btn btn-dark">{loggedInUser.name}</button> : <Link to="/login"><button className="loginBtn btn btn-warning">Login</button></Link>}
            </div>
            
        </div>
    );
};

export default Navbar;