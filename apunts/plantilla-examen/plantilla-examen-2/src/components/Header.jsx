import { Link, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = ({title, navItems, links}) => {

    const location = useLocation();
    const isActive = (path) => location.pathname === path
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <header>
                <nav className="bg-[#2C3545] flex justify-between items-center py-[0.8rem] px-8 relative">
                <button
                    className="boto-hamburguesa"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Obrir menú"
                    aria-expanded={menuOpen}
                >
                    ☰
                </button>
                <li className="text-[1.4rem] font-semibold"><Link to="/">{title}</Link></li>

                <nav className={`bg-[#2C3545] flex justify-between items-center py-[0.8rem] px-8 relative navbar ${menuOpen ? 'activa' : ''}`}>
                    <ul className="flex justify-between items-center gap-8 list-none">
                        {navItems.map((item, i) => (
                            <li key={item}><Link to={links[i]} className={`nav-link ${isActive(links[i]) ? 'active' : ''}`}>{item}</Link></li>
                        ))}
                    </ul>
                </nav>
                </nav>
            </header>
        </>
    )

}

export default Header;