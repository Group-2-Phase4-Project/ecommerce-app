import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "../../pages/About";
import Home from "../../pages/Home";
import Login from "../auth/Login";
import Footer from "../footer/Footer";


import './navbar.css'
import './header.css'



function NavbarFront(){


    return(
        <Router>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="dark">
                <div className="container-fluid">
                    <ul className="nav nav-pills mb-3 fs-3">
                        <li className="nav-item nav-pills ms-3 custom-link">
                            <Link to= "/">Home</Link>
                        </li>
                        <li className="nav-item nav-pills ms-3 custom-link">
                            <Link to= "/about">About</Link>
                        </li>

                        {/* <li className="nav-item ms-3 custom-link">
                            <Link to= "register">Signup</Link>
                        </li> */}
                    </ul>
                </div>
                <ul className="nav-icons">
                <li >
                    <Link to= "/login">Login<i class="ri-login-circle-line"></i></Link>
                </li>
                </ul>
                {/* <div>
                    <nav>
                    <Link className="nav-link active" aria-current="page" to="/login">
                Login/Signup
              </Link>
                    </nav>

                </div> */}
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
            {/* <div className="footer">
            <p>&copy; 2023 EasyShop. All rights reserved.</p>
            </div> */}


            <Footer />
        </Router>
    )
}



export default NavbarFront;