import { Link, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import '../styles/header.css';

const Header = () => {

    const location = useLocation();
    const isActive = (path) => location.pathname === path

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
                        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )

}

export default Header;