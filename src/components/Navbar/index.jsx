import React from 'react';
import { IoCodeSlash } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { HiHome, HiMenuAlt1, HiUser, HiMailOpen } from 'react-icons/hi';
import './style.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="flex items-center">
                <span className="spin spinner">
                    <IoCodeSlash
                        size={36}
                        className="inline bg-green-500 text-white rounded-full p-1"
                    />
                </span>
                <h4 className="font-bolder inline-block">Buu's Portfolio</h4>
            </Link>
            <nav className="flex justify-around w-1/3">
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    className="nav-icon"
                >
                    <HiHome size={28} />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/about"
                    className="nav-icon"
                >
                    <HiUser size={28} />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/skills"
                    className="nav-icon"
                >
                    <HiMenuAlt1 size={28} />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/contact"
                    className="nav-icon"
                >
                    <HiMailOpen size={28} />
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
