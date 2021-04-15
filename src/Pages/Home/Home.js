import React from "react";
import HomeContent from "./HomeContent/HomeContent";
import HomePhoto from "./HomePhoto/HomePhoto";
import { HomeWrapper } from "./HomeStyling";

export default function Home() {
    return (
        <HomeWrapper>
            <HomePhoto/>
            <HomeContent/>
        </HomeWrapper>
    );
}