import React from "react";
import { Container } from "../Container";
import ProjectItem from "../Projects/ProjectItem";
import { breakpoints } from "./../../helpers/Media";
import styled from "styled-components";
import projects from "./../../data/projects.json";

const ContainerProjectList = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    // grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-columns: 1fr;
    // grid-template-rows: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
  }
`;

export default function ProjectList() {
  return (
    <ContainerProjectList place="center" gap="100px">
      {Object.keys(projects).map((id) => {
        return <ProjectItem project={projects[id]} />;
      })}
    </ContainerProjectList>
  );
}
