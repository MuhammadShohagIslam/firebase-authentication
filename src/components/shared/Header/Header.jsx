import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-primary text-white">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    FBAuthentication
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <p>User Name</p>
            </div>
        </div>
    );
};

export default Header;
