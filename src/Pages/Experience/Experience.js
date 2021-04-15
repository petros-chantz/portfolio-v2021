import React from "react";
import { ExperienceWrapper } from "./ExperienceStyling";
import PageTitle from "./../../Components/PageTitle/PageTitle";
import PageDescription from "./../../Components/PageDescription/PageDescription";

export default function Experience() {
    return (
        <ExperienceWrapper id="experience">
            <PageTitle PageTitle="Experience" />
            <PageDescription pageDescription="Pages bodyLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <div><h1>hello</h1></div>
        </ExperienceWrapper>
    );
}