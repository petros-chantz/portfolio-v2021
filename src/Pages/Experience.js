import React from "react";
import { Container } from "../Components/Containers";
import ExperienceYearsItem from "../Components/ExperienceYearsItem";
import PagesInfoSections from "../Components/PagesInfoSections";
import { Title, Text } from "../Components/TextElements";

export default function Experience() {
    return (
        <Container padding="20px 200px 0px 200px" rows="150px 1fr" gap="30px" id="experience">
            <PagesInfoSections pageTitle="Experience" pageText="As my skills are multi-phased, so is my professional experience.
             In the past four years I have had the chance to work in multiple academic research projects as a
             research assistant, in design research labs as a lab assistant and
             in commercial projects for companies and freelancers such as Signify (Ex. Philips Lighting)."/>
            <Container columns="repeat(4,1fr)" place="center">
                <ExperienceYearsItem number="5" field="research projects" />
                <ExperienceYearsItem number="3" field="commercial projects" />
                <ExperienceYearsItem number="25+" field="stakeholder collaborations" />
                <ExperienceYearsItem number="3+" field="years of professional experience" />
            </Container>
        </Container>
    );
}