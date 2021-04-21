import React from "react";
import { HashLink } from "react-router-hash-link";
import PageDescription from "../../Components/Page/Description/PageDescription";
import PageTitle from "../../Components/Page/Title/PageTitle";
import ProjectItem from "../../Components/Project/ProjectItem/ProjectItem";
import { ProjectsWrapper, ProjectWrapper, TopWrapper, Top } from "./ProjectsStyling";
import projects from "./../Data/projects.json";

export default function Projects() {
    return (
        <ProjectsWrapper id="projects">
            <PageTitle PageTitle="Projects" />
            <PageDescription pageDescription="Hereby is a selected list of various research, 
            design and frontend development projects I have been working on in the past four years. "/>
            <ProjectWrapper>
                            {Object.keys(projects).map(id => {
                return (
                    <ProjectItem project={projects[id]}/>
                );
            })}
            </ProjectWrapper>
            <TopWrapper>
                <HashLink smooth to="/#top">
                    <Top>Back to the Top</Top>
                </HashLink> 
            </TopWrapper>
        </ProjectsWrapper>
    );
}