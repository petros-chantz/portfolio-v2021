import React from "react";
import '../../App.css';
import UXPortfolio from "../UXPortfolio/UXPortfolio";
import {HomeWrapper} from "./HomeStyling";
import HomeTitle from "./HomeTitle";
import HomeContent from "./HomeContent";
import HomeLinks from "./HomeLinks";
import projects from "../../db.json";
import DevPortfolio from "../Dev/DevPortfolio";

export default function Home(){
    return(<>
        <HomeWrapper>
            <div className="home-body">
                <HomeTitle/>
                <HomeContent/>
                <HomeLinks/>
           </div>
        </HomeWrapper>
        <UXPortfolio projects={projects}/>
        <DevPortfolio/>
    </>);
}


