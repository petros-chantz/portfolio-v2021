import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ProjectBlock from "./ProjectBlock/ProjectBlock";
import { ProjectsWrapper } from "./ProjectsStyling";

export default function Projects() {
    return (
        <ProjectsWrapper id="projects">
            <PageTitle PageTitle="Projects" />
            <ProjectBlock/>
        </ProjectsWrapper>
    );
}