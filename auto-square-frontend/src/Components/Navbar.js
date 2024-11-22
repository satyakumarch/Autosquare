import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">AutoSquare</div>
            <ul className="nav-links">
                <li><a href="#">Shop by Categories</a></li>
                <li><a href="#">Auto Parts</a></li>
                <li><a href="#">Engine</a></li>
                <li><a href="#">Transmission</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Info</a></li>
            </ul>
            <div className="contact-info">
                <span>(888) 748-0882</span>
                <span>Mon-Fri 8AM - 7PM EST</span>
            </div>
            <div className="icons">
                <a href="#"><i className="fas fa-search"></i></a>
                <a href="#"><i className="fas fa-shopping-cart"></i></a>
                <a href="#"><i className="fas fa-user"></i></a>
            </div>
        </nav>
    );
};

export default Navbar;
