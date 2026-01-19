import { Link, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({title, navItems, links}) => {

    const location = useLocation();
    const isActive = (path) => location.pathname === path
        const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <header>
                <nav className="bg-[#2C3545] flex justify-between items-center py-[0.8rem] px-8 relative">
                    <ul className="flex justify-between items-center gap-8 list-none">
                        <li>
                            <button
                                className="md:hidden h-10 w-10 flex items-center justify-center p-[0.4rem] rounded-lg focus:outline-none"
                                aria-label="Open menu"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                            </button>
                        </li>
                        <li className="text-[1.4rem] font-semibold"><Link to="/">{title}</Link></li>



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