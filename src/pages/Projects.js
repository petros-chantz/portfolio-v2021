import React from "react";
import { Container } from "../components/Container";
import { breakpoints } from "./../helpers/Media";
import { Text } from "./../components/Text";
import styled from "styled-components";
import ProjectList from "../components/Projects/ProjectList";
import { HashLink } from "react-router-hash-link";

const PaddingProjects = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 500px 0px 500px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 190px 0px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 190px 0px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 0px 150px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 0px 100px;
    grid-template-rows: 1fr 100px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 0px 30px;
  }
`;

export default function Projects(props) {
  return (
    <PaddingProjects id="projects" gap="50px">
      <ProjectList colorTheme={props.colorTheme} />
      <Container place="center end" padding="50px 0px 0px 0px">
        <HashLink smooth to="/#top">
          <Text fontSize="40px">Back to the top</Text>
        </HashLink>
      </Container>
    </PaddingProjects>
  );
}
