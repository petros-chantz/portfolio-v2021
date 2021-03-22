import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {NavBarWrapper} from "./NavBarStyling";

export default function Navbar() {

    return (
      <NavBarWrapper id="top">
        <NavLink smooth to="/" >
         <div className="nav-name-wrapper">
          <h2 className="nav-name-text">Petros Chantzopoulos</h2>
         </div>
        </NavLink>
        <HashLink smooth to="/#ux-portfolio">
        <div className="nav-portfolio-wrapper">
          <h5 className="nav-portfolio-text">UX Portfolio</h5>
         </div>
        </HashLink>
        <HashLink smooth to="/#dev-portfolio">
        <div className="nav-react-wrapper">
          <h5 className="nav-react-text">Dev Portfolio</h5>
         </div>
        </HashLink>

      </NavBarWrapper>
    );
}