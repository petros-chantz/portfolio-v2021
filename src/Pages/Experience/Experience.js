import React from "react";
import { ExperienceWrapper } from "./ExperienceStyling";
import PageTitle from "./../../Components/Page/Title/PageTitle";
import PageDescription from "./../../Components/Page/Description/PageDescription";
import ExperienceList from "./ExperienceList/ExperienceList";

export default function Experience() {
    return (
        <ExperienceWrapper id="experience">
            <PageTitle PageTitle="Experience" />
            <PageDescription pageDescription="As my skills are multi-phased, so is my professional experience. In the past four
            years I have had the chance to work in multiple academic research projects as a research assistant, in design research
            labs as a lab assistant and in commercial projects for companies and freelancers such as Signify (Ex. Philips Lighting)."/>
            <ExperienceList/>
        </ExperienceWrapper>
    );
}