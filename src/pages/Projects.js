import React from "react";
import { Container } from "../components/Container";
import { breakpoints } from "./../helpers/Media";
import styled from "styled-components";
import Quotes from "../components/Quotes";
import ProjectList from "../components/Projects/ProjectList";

const PaddingProjects = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 500px 150px 500px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 190px 200px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 190px 200px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 150px 150px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 150px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 150px 30px;
  }
`;

export default function Projects() {
  return (
    <PaddingProjects id="projects">
      <Container>
        <Quotes
          quotesText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </Container>
      <ProjectList />
    </PaddingProjects>
  );
}
