import React from "react";
import '../../App.css';
import styled from "styled-components";
import DevPortfolio from "../DevPortfolio/DevPortfolio";
import UXPortfolio from "../UXPortfolio/UXPortfolio";
import HomeTitle from "./HomeTitle";
import HomeContent from "./HomeContent";
import HomeLinks from "./HomeLinks";
import projects from "../../db.json";

const HomeWrapper = styled.div`
    height: 90vh;
    margin: 20px;
    margin-top: 60px;

    .home-body{
        height: 80%;
        display: grid;
        grid-template-rows: 1fr 3fr 1fr;
       
    }
`;

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


