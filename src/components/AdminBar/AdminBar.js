import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Adminbar.css'
import { Link } from 'react-router-dom';

const AdminBar = () => {
    return (
        <div>
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="navLogo">
                    <h3>Series Freak</h3>
                    <p>BUY YOUR FAVORITE SERIES IN CHEAPEST RATE!</p>
                </div>
                <div className="navBar d-flex flex-column bd-highlight mb-3">
                    <Link to="/home"><button className="loginBtn btn btn-info">Home</button></Link>
                    <Link to="/addproducts"><button className="loginBtn btn btn-info">Add Products</button></Link>
                    <Link to="/productslist"><button className="loginBtn btn btn-info">List & Remove Items</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AdminBar;