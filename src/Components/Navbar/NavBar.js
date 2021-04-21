import React from "react";
import { HashLink } from "react-router-hash-link";
import { useSpring} from 'react-spring'
import {NavBarWrapper} from "./NavBarStyling";

export default function Navbar() {
   const animation = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
      <NavBarWrapper id="top" style={animation}>
        <div className="navbar-menu-list">
            <HashLink smooth to="/#skills" >
             <div className="nav-menu-item">
              <h5 className="item">SKILLS</h5>
             </div>
            </HashLink>
            <HashLink smooth to="/#experience">
            <div className="nav-menu-item">
              <h5 className="item">EXPERIENCE</h5>
             </div>
            </HashLink>
            <HashLink smooth to="/#projects">
            <div className="nav-menu-item">
              <h5 className="item">PROJECTS</h5>
             </div>
            </HashLink>
        </div>
      </NavBarWrapper>
    );
}