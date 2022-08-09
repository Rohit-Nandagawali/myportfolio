import React from "react";
import "./NavBar.css"
import { slide as Menu } from 'react-burger-menu'
import { NavLink} from "react-router-dom";
const NavBar = () => {
    return ( 
        <Menu>
        {/* WE NEVER USE <a > tag in react router application , because it will refresh the whole page*/}
        {/* <a id="home" className="menu-item" href="/">
            Home
        </a> */}
       
       <NavLink to="/" className="menu-item">
        Home
       </NavLink>
       <NavLink to="/about" className="menu-item">
        About
       </NavLink>
       <NavLink to="/projects" className="menu-item">
        Projects
       </NavLink>
       <NavLink to="/skills" className="menu-item">
        Skills
       </NavLink>
       <NavLink to="/contact" className="menu-item">
        Contact
       </NavLink>

      </Menu>
     );
}
 
export default NavBar;