import React from "react";
import { Container, ProjectsContainer } from "../components/Container";
import { TextBig } from "./../components/Text";
import ProjectList from "../components/Projects/ProjectList";
import { HashLink } from "react-router-hash-link";

export default function Projects(props) {
  return (
    <ProjectsContainer id="projects" gap="50px" padding="100px 0px 100px 0px">
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
