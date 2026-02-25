import { Link, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = ({ title, searchPlaceholder, navItems, links }) => {
    const location = useLocation()
    const isActive = (path) => location.pathname === path
    const inputRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    // Tanca el menú quan canvies de ruta
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);
    return (
        <>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li>
                        <button
                            className="header-btn"
                            aria-label="Open menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FontAwesomeIcon icon={faBars} className="icon-bars" />
                        </button>
                    </li>
                    <li className="header-title"><Link to="/films">{title}</Link></li>
                    <li className="header-form">
                        <form role="search" aria-label="Search movies and TV">
                            <label htmlFor="search-input" className="sr-only">Search Movies & TV</label>
                            <input
                                id="search-input"
                                ref={inputRef}
                                type="text"
                                name="search"
                                className="header-search-input"
                                placeholder={searchPlaceholder}
                                aria-label={searchPlaceholder}
                                style={{ width: "370px" }}
                            />
                        </form>
                    </li>
                </ul>
                {/* Desktop nav */}
                <div className="header-desktop-nav" role="navigation">
                    {navItems.map((item, i) => (
                        <div key={item}><Link to={links[i]} className={`nav-link ${isActive(links[i]) ? 'active' : ''}`}>{item}</Link></div>
                    ))}
                </div>
                {/* Mobile menu overlay */}
                {menuOpen && (
                    <div className="header-mobile-overlay" onClick={() => setMenuOpen(false)}></div>
                )}
                <ul
                    className={`header-mobile-menu ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    role="navigation"
                    style={{ boxShadow: menuOpen ? '0 0 0 100vw rgba(0,0,0,0.5)' : undefined }}
                >
                    <li className="flex justify-end">
                        <button
                            className="header-btn"
                            aria-label="Close menu"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="text-2xl">×</span>
                        </button>
                    </li>
                    <li>
                        <form role="search" aria-label="Search movies and TV">
                            <label htmlFor="search-input-mobile" className="sr-only">Search Movies & TV</label>
                            <input
                                id="search-input-mobile"
                                type="text"
                                name="search"
                                className="header-mobile-search-input"
                                placeholder={searchPlaceholder}
                                aria-label={searchPlaceholder}
                            />
                        </form>
                    </li>
                    {navItems.map((item, i) => (
                        <li key={item}>
                            <Link
                                to={links[i]}
                                className={`nav-link ${isActive(links[i]) ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Header;