import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Navbar.css";

const Navbar = () => {

    const history = useHistory()
    const { user, logOut } = useAuth();
    const logo_img = "https://i.ibb.co/4RFNp8s/logo-2.png";
    const static_images = "https://i.ibb.co/q0QVrCN/images-2.jpg";

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
                                
                                <div className="d-md-flex">
                                    <div class="collapse navbar-collapse dropdown_btn" id="navbarSupportedContent">
                                    <ul class="navbar-nav mb-2 mb-lg-0">
                                        <li class="nav-item dropdown">
                                        <span class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dashboard
                                        </span>
                                        <ul class="dropdown-menu dropdown_menu_bg" aria-labelledby="navbarDropdown">
                                            <div className="text-center py-2">
                                                <img src={user.photoURL ? user.photoURL :static_images} alt="profile_img" className="profile_photo shadow mx-3" />
                                                <p className="my-auto fw-bold robbo_font mt-2">{user.displayName}</p>
                                            </div>
                                            <li><hr class="dropdown-divider"/></li>
                                            {
                                                y === "admin" ?
                                                <div>
                                                    <li>
                                                        <Link class="dropdown-item fw-bold robbo_font" to="/addproduct">
                                                            Add A Product
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link class="dropdown-item fw-bold robbo_font" to="/">
                                                            Manage Products
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link class="dropdown-item fw-bold robbo_font" to="/">
                                                            Make Admin
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link class="dropdown-item fw-bold robbo_font" to="/">
                                                            Manage All Product
                                                        </Link>
                                                    </li>
                                                </div>
                                                                    :
                                                <div>
                                                    <li>
                                                        <Link class="dropdown-item fw-bold robbo_font" to="/">
                                                            Pay
                                                        </Link>
                                                    </li>              
                                                    <li>
                                                        <Link class="dropdown-item fw-bold robbo_font" to="/">
                                                            My Order
                                                        </Link>
                                                    </li>              
                                                    <li>
                                                        <Link class="dropdown-item fw-bold robbo_font" to="/">
                                                            Review
                                                        </Link>
                                                    </li>            
                                                </div>            
                                            }
                                        </ul>
                                        </li>
                                    </ul>
                                </div>
                                
                                    <div>
                                        <button className="login_btn ms-2" onClick={LogOut}>Log Out</button>
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