import React from "react";
import { HashLink } from "react-router-hash-link";
import {NavBarWrapper} from "./NavBarStyling";

export default function Navbar() {

    return (
      <NavBarWrapper id="top">
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