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
            <PageDescription pageDescription="Pages bodyLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
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