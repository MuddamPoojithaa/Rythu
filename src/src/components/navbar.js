import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "../images/WhatsApp Image 2024-06-22 at 12.14.49_066d2742.jpg"

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Logo" className="navbar-logo-img" />
                </Link>
                <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links">
                                About
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-links">
                                Services
                            </span>
                            <div className="dropdown-content">
                                <Link to="/services/service1" className="nav-links">
                                    To Share Experience
                                </Link>
                                <Link to="/services/service2" className="nav-links">
                                    Challenges Faced By Farmers
                                </Link>
                                <Link to="/services/service3" className="nav-links">
                                    New Technology Equipment
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-links">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/vedio" className="nav-links">
                                Videos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://online.fliphtml5.com/wdiva/wuye/" className="nav-links" target="_blank" rel="noopener noreferrer">
                                Magazines
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/Crops" className="nav-links">
                                Crops
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links">
                                Contact Us
                            </Link>
                        </li>

                    </ul>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
