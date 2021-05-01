import React from "react";
import { Container, Padding } from "../components/Container";
import { breakpoints } from "./../helpers/Media";
import { Text } from "./../components/Text";
import styled from "styled-components";
import Quotes from "../components/Quotes";
import ProjectList from "../components/Projects/ProjectList";
import { HashLink } from "react-router-hash-link";

const ProjectsContainer = styled(Padding)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 100px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-columns: 1fr;
    grid-template-rows: 700px 1fr 100px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    grid-template-rows: 1fr 3fr 100px;
    grid-template-columns: 1fr;
  }
`;

export default function Projects(props) {
  return (
    <ProjectsContainer id="projects" gap="50px">
      <Container>
        <Quotes
          quotesText="Don’t tell me what the interaction is, just show it to me! So without further ado, here is a broad 
        variety of projects I’ve worked on in the past 4 years spanning across UX Research,
        UI Design and Frontend Development. Enjoy!"
        />
      </Container>
      <ProjectList colorTheme={props.colorTheme} />
      <Container place="center end" padding="50px 0px 0px 0px">
        <HashLink smooth to="/#top">
          <Text fontSize="40px">Back to the top</Text>
        </HashLink>
      </Container>
    </ProjectsContainer>
  );
}
