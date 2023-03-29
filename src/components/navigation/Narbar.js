import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from "../../pages/Products";
import Cart from "../../pages/Cart";
import Orders from "../../pages/Orders";
import NewArrivals from "../../pages/NewArrivals";
import Logout from "../auth/Logout";
import Footer from "../footer/Footer";



import "./header.css"


function Navbar(){

    // const {totalItems, favoriteItems} = useContext(StateContext)

    return(
        <Router>
            
            <nav >
                <div className="logo">
                    <Link to='/'>EasyShop</Link>
                </div>
                <div className="container-fluid">
                    <ul className="nav-items">
                        <li>
                            <Link to= "/">Products</Link>
                        </li>
                      
                        <li >
                            <Link to= "/new-arrivals">New Arrivals</Link>
                        </li>
          
                    </ul>
                </div>
                <div className="nav-items">
                    
                        <ul className="nav-icons">
                            <li>
                                <Link to="/orders ">Orders</Link>
                            </li>
                            <li> 
                                <Link to='/cart'>
                                <i class="ri-shopping-cart-line"></i>
                                    {/* <span className="item-count">{totalItems}</span> */}
                                </Link>
                            </li>
                            <li>
                            <Link to='/logout'><i class="ri-logout-circle-r-line"></i></Link>
                            </li>
                            
                        </ul>
                    
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/new-arrivals" element={<NewArrivals/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>

            <Footer />
        </Router>
            
    )
}


export default Navbar;