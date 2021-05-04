import React from "react";
import { Container, ProjectsContainer } from "../components/Container";
import { Text } from "./../components/Text";
import ProjectList from "../components/Projects/ProjectList";
import { HashLink } from "react-router-hash-link";

export default function Projects(props) {
  return (
    <ProjectsContainer id="projects" gap="50px">
      <ProjectList colorTheme={props.colorTheme} />
      <Container place="center end" padding="50px 0px 0px 0px">
        <HashLink smooth to="/#top">
          <Text fontSize="40px">Back to the top</Text>
        </HashLink>
      </Container>
    </ProjectsContainer>
  );
}
