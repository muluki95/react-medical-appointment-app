import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {

    
  return (
    <nav className="nav">
         <Link to="/"> Stay Healthy Inc.</Link>
          <ul>
          <li><Link to ="/" > Home</Link></li>
        <li><Link to ="/appointment" > Appointment</Link></li>
        <li><Link to="/Signup"> Sign Up</Link></li>
        <li><Link to="/Login"> Login</Link></li>
     </ul>

    </nav>
     

  )
}

export default Navbar