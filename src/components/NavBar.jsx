import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar is-primary">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/horses" className="navbar-item">Your Stable</Link>
            <Link to="/add-horse" className="navbar-item">Add Horse</Link>
            <Link to="/favorite_horses" className="navbar-item">Favorite Horses</Link>
            <Link to="/login" className="navbar-item">Login</Link>
        </div>
    </nav>
);

export default NavBar;
