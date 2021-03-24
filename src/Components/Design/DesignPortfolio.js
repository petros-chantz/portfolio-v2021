import React from "react";
import FourK from "./Responsive Components/FourK";
import Laptop from "./Responsive Components/Laptop";
import LaptopL from "./Responsive Components/LaptopL";
import MobileL from "./Responsive Components/MobileL";
import MobileM from "./Responsive Components/MobileM";
import MobileS from "./Responsive Components/MobileS";
import Tablet from "./Responsive Components/Tablet";

export default function DesignPortfolio(props){
    const { projects } = props;

    return(<>
    <FourK projects={projects}/>
    <LaptopL projects={projects}/>
    <Laptop projects={projects}/>
    <Tablet projects={projects}/>
    <MobileL projects={projects}/>
    <MobileM projects={projects}/>
    <MobileS projects={projects}/>
  </>);
}