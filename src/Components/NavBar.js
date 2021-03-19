import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const NavBarWrapper = styled.div`
  height: 6vh;
  margin: 20px;
  border-bottom: 3px solid black;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;

  @media (max-height: 600px) {
    border-bottom: none;
  }

  .nav-name-wrapper{
    height: 100%;
    display: grid;
    place-items: center start;
    
    .nav-name-text{
      margin: 0;
      padding: 0;
      font-weight: 700;
      text-transform: uppercase;
      color: black;
      letter-spacing: 1px;

      :hover {
        background-color: black;
        color: white;
      }
    }
  }

  .nav-portfolio-wrapper{
    height: 100%;
    display: grid;
    place-items: center;

    .nav-portfolio-text{
      margin: 0;
      padding: 0;
      font-weight: 500;
      text-transform: uppercase;
      color: black;

      :hover {
        background-color: black;
        color: white;
      }
    }
  }

  .nav-react-wrapper{
    height: 100%;
    display: grid;
    place-items: center;

    .nav-react-text{
      margin: 0;
      padding: 0;
      font-weight: 500;
      text-transform: uppercase;
      color: black;

      :hover {
        background-color: black;
        color: white;
      }
    }
  }

  @media screen and (max-width: 500px) {
    height: 8vh;
    grid-gap: 10px;
    grid-template-columns: 2fr 1fr;

    .nav-name-text{
      font-size: 20px;
    }

    .nav-portfolio-text{
      font-size: 15px; 
  }

  @media screen and (max-width: 350px) {
    .nav-name-text{
      font-size: 15px;
    }

    .nav-portfolio-text{
      font-size: 13px; 
  }


`;

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