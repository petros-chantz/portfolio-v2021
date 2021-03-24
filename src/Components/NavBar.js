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
        <div className="portfolios">
            <HashLink smooth to="/#design-portfolio">
            <div className="nav-portfolio-wrapper">
              <h5 className="nav-portfolio-text">Design Projects</h5>
             </div>
            </HashLink>
            <HashLink smooth to="/#dev-portfolio">
            <div className="nav-portfolio-wrapper">
              <h5 className="nav-portfolio-text">Dev Portfolio</h5>
             </div>
            </HashLink>
        </div>

      </NavBarWrapper>
    );
}