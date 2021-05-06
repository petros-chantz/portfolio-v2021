import React from "react";
import { Container } from "../components/Container";
import { TextBig } from "./../components/Text";
import ProjectList from "../components/Projects/ProjectList";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { breakpoints } from "./../helpers/Media";

export const ProjectsContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 300px 50px 300px;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 100px;
  }

  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 200px 50px 200px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 50px 150px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 50px 100px;
    grid-template-rows: 50px 1fr 100px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 50px 30px;
  }
`;

export default function Projects(props) {
  return (
    <ProjectsContainer id="projects" gap="50px">
      <Container place="center start">
        <TextBig>Projects</TextBig>
      </Container>
      <ProjectList colorTheme={props.colorTheme} />
      <Container place="center end" padding="50px 0px 0px 0px">
        <HashLink smooth to="/#top">
          <TextBig>Back to the top</TextBig>
        </HashLink>
      </Container>
    </ProjectsContainer>
  );
}
