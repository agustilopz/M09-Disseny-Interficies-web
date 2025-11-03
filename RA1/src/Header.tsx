import React from 'react';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    title: string;
    searchPlaceholder: string;
    navItems: string[];
}

const Header: React.FC<HeaderProps> =  ({ title, searchPlaceholder, navItems }) => {
    return (
        <>
        <nav style={{ backgroundColor: "#2C3545", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem 2rem" }}>
          <ul style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          gap: "2rem",
          alignItems: "center"

        }}>
          <li> <FontAwesomeIcon className="top-nav-icon" icon={faBars}  style={{
            height: "24px", width: "24px", display: "flex", alignItems: "center", padding: "0.4rem", borderRadius: "8px",
          }} /></li>
          <li style={{ fontSize: "1.4rem", fontWeight: "600" }}>{title}</li>
          <li><div style={{ backgroundColor: "#374151", borderRadius: "15px", padding: "0.3rem 1.5rem", width: "50vh", textAlign: "left" }}>🔎 {searchPlaceholder}</div></li>
        </ul>
        <ul style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          gap: "2rem",
          alignItems: "center",
          fontWeight: "500"
        }}>
            {navItems.map((item) => {
                return (
                    <li><a href="">{item}</a></li>
                )
            })}
        </ul>
        </nav>
        </>
    )
}


export default Header;