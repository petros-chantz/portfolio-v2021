import React from "react";
import { Container } from "../Components/Containers";
import PagesInfoSections from "../Components/PagesInfoSections";
import ProjectItem from "../Components/ProjectItem/ProjectItem";
import { Title, Text } from "../Components/TextElements";

export default function Projects() {
    return (
        <Container padding="20px 200px 0px 200px" rows="150px 1fr 30px" gap="30px" id="projects">
            <PagesInfoSections pageTitle="Projects" pageText="Hereby is a selected list of various research, design and 
            frontend development projects I have been working on in the past four years."/>
            <Container  place="center" gap="20px" margin="0px 0px 50px 0px">
                <ProjectItem />
            </Container>
            <Container place="center end"><Text>Go to the top</Text></Container>
        </Container>
    );
}