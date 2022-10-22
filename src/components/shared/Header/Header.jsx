import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "./../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
    const { user, logOut } = useAuth();
    
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Log Out Successfully!");
            })
            .catch((error) => {
                toast.error(error);
            });
    };
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
                    {user?.uid && (
                        <>
                            <li onClick={handleLogOut} className="mr-2">
                                <Link>LogOut</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.uid && (
                    <>
                        <li className="mr-2">
                            <Link to="/">{user?.displayName}</Link>
                        </li>
                        <li className="flex">
                            <Link to="/">
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src={user?.photoURL}
                                    alt="Shoes"
                                />
                            </Link>
                        </li>
                    </>
                )}

                {!user?.uid && (
                    <>
                        <li className="mr-2">
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
