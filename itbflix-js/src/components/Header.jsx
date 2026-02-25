import { Link, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title, searchPlaceholder, navItems, links }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const inputRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <nav className="header-nav">
                <ul className="header-left">
                    <li>
                        <button
                            className="menu-toggle"
                            aria-label="Open menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FontAwesomeIcon icon={faBars} className="menu-icon" />
                        </button>
                    </li>
                    <li className="header-title"><Link to="/films">{title}</Link></li>
                    <li className="header-search-desktop">
                        <form role="search" aria-label="Search movies and TV">
                            <label htmlFor="search-input" className="sr-only">Search Movies & TV</label>
                            <input
                                id="search-input"
                                ref={inputRef}
                                type="text"
                                name="search"
                                className="search-input"
                                placeholder={searchPlaceholder}
                                aria-label={searchPlaceholder}
                            />
                        </form>
                    </li>
                </ul>

                {/* Desktop nav */}
                <div className="header-desktop-nav" role="navigation">
                    {navItems.map((item, i) => (
                        <div key={item}>
                            <Link to={links[i]} className={`nav-link ${isActive(links[i]) ? 'active' : ''}`}>{item}</Link>
                        </div>
                    ))}
                </div>

                {/* Mobile overlay */}
                {menuOpen && (
                    <div className="mobile-overlay" onClick={() => setMenuOpen(false)}></div>
                )}

                {/* Mobile menu */}
                <ul
                    className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
                    role="navigation"
                >
                    <li className="mobile-menu-close">
                        <button
                            className="close-btn"
                            aria-label="Close menu"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span>×</span>
                        </button>
                    </li>
                    <li>
                        <form role="search" aria-label="Search movies and TV">
                            <label htmlFor="search-input-mobile" className="sr-only">Search Movies & TV</label>
                            <input
                                id="search-input-mobile"
                                type="text"
                                name="search"
                                className="search-input search-input--full"
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
    );
};

export default Header;