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
                    <li className="text-[1.4rem] font-semibold"><Link to="/films">{title}</Link></li>
                    <li className="hidden md:block">
                        <form role="search" aria-label="Search movies and TV">
                            <label htmlFor="search-input" className="sr-only">Search Movies & TV</label>
                            <input
                                id="search-input"
                                ref={inputRef}
                                type="text"
                                name="search"
                                className="bg-[#374151] rounded-[15px] py-[0.3rem] px-6 w-[50vh] text-left"
                                placeholder={searchPlaceholder}
                                aria-label={searchPlaceholder}
                                style={{ width: "370px" }}
                            />
                        </form>
                    </li>
                </ul>
                {/* Desktop nav */}
                <ul className="hidden md:flex justify-between list-none gap-8 items-center font-medium" role="navigation">
                    {navItems.map((item, i) => (
                        <li key={item}><Link to={links[i]} className={`nav-link ${isActive(links[i]) ? 'active' : ''}`}>{item}</Link></li>
                    ))}
                </ul>
                {/* Mobile menu overlay */}
                {menuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
                )}
                <ul
                    className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#2C3545] z-50 flex flex-col gap-8 p-8 font-medium transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    role="navigation"
                    style={{ boxShadow: menuOpen ? '0 0 0 100vw rgba(0,0,0,0.5)' : undefined }}
                >
                    <li className="flex justify-end">
                        <button
                            className="h-10 w-10 flex items-center justify-center p-[0.4rem] rounded-lg focus:outline-none"
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
                                className="bg-[#374151] rounded-[15px] py-[0.3rem] px-6 w-full text-left"
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