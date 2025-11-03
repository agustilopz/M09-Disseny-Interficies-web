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
        <nav className="bg-[#2C3545] flex justify-between items-center py-[0.8rem] px-8">
          <ul className="flex justify-between items-center gap-8 list-none">
          <li> <FontAwesomeIcon className="h-6 w-6 flex items-center p-[0.4rem] rounded-lg" icon={faBars}/></li>
          <li className="text-[1.4rem] font-semibold">{title}</li>
          <li><div className="bg-[#374151] rounded-[15px] py-[0.3rem] px-6 w-[50vh] text-left">🔎 {searchPlaceholder}</div></li>
        </ul>
        <ul className="flex justify-between list-none gap-8 items-center font-medium">
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