import React from "react";
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <sec className="header">
          
            <nav>
              <a href="./index.html"><img src="./Assets/logo.png" className="logo" /></a>
              <ul id="nav-item">
                <Link to='/'><li>Home</li></Link>
                <Link to='/bbooks'><li> Buy Books</li></Link>
                <Link to='/sbook'><li>Sell Books</li></Link>
                <Link to='/login'><li>Login</li></Link>
            
              </ul>
            </nav>
          </sec>
    )
}

export default Navbar;