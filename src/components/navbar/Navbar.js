import React from 'react';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Navbar.css";

const Navbar = () => {

    const history = useHistory()
    const { user, logOut } = useAuth();
    const logo_img = "https://i.ibb.co/4RFNp8s/logo-2.png";

    const LogOut = () => {
        logOut()
        .then(() => history.push("/"))  
    }

    const y = "admin";

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo_img} alt="logo_imgages" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link nav_list text-dark" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav_list text-dark" to="/explore">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav_list text-dark" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav_list text-dark" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                    <div>
                            {
                                user.email || user.displayName ?
                                
                                <div className="d-md-flex align-items-center">
                                    <div>
                                        <NavLink className="text-primary" to="/dashboard">Dashboard</NavLink>
                                    </div>
                                
                                    <div className="mt-3 mt-md-0 d-none d-md-block">
                                        <button className="login_btn ms-md-4" onClick={LogOut}>Log Out</button>
                                    </div>
                                </div>
                                    :
                                <Link to="/signin">
                                    <button className="login_btn">Sign In</button>
                                </Link>
                                
                                    
                        }
                    </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;