import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    
  return (
    <div>
<div className="nav_title">
          <Link href="/">
          StayHealthy Inc 
          </Link>
          <span>.</span>
        </div>
        <div className="nav__icon" >
          <i className="fa fa-times fa fa-bars"></i>
        </div>
        <ul className="nav__links active">
          <li className="link">
          
            <Link href="../Landing_Page/LandingPage.html">Home</Link>
          </li>
          <li className="link">
        
            <Link href="#">Appointments</Link>
          </li>
              <li className="link">
                
                <Link href="../Sign_Up//Sign_Up.html">
                  <button className="btn1">Sign Up</button>
                </Link>
              </li>
              <li className="link">
               
                <Link href="../Login/Login.html">
                  <button className="btn1">Login</button>
                </Link>
              </li>
        </ul>
    </div>
  )
}

export default Navbar