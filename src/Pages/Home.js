import React from "react";
import HomeContent from "../Components/Home/HomeContent/HomeContent";
import HomePhoto from "../Components/Home/HomePhoto/HomePhoto";
import { HomeWrapper } from "./../Components/Home/HomeStyling";

export default function Home() {
    return (
        <HomeWrapper>
            <HomePhoto/>
            <HomeContent/>
        </HomeWrapper>
    );
}