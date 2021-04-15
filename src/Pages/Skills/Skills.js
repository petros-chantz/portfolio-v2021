import React from "react";
import PageDescription from "../../Components/PageDescription/PageDescription";
import PageTitle from "../../Components/PageTitle/PageTitle";
import DevStack from "./DevStack/DevStack";
import Expertises from "./Expertises/Expertises";
import { SkillsWrapper } from "./SkillsStyling";

export default function Skills() {
    return (
        <SkillsWrapper id="skills">
            <PageTitle PageTitle="Skills" />
            <PageDescription pageDescription="Pages bodyLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "/>
            <Expertises expertiseTitle="UX RESEARCH" />
            <Expertises expertiseTitle="UI DESIGN" />
            <Expertises expertiseTitle="FRONTEND DEVELOPMENT" />
            <DevStack/>
        </SkillsWrapper>
    );
}