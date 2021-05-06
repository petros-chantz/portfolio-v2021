import React from "react";
import { Container } from "../components/Container";
import ExperienceList from "../components/Experience/ExperienceList";
import { TextBig, TextLarge } from "../components/Text";
import styled from "styled-components";
import { breakpoints } from "./../helpers/Media";

export const ExperienceContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 300px 50px 300px;
    grid-template-rows: 50px 1fr 300px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 200px 50px 200px;
    grid-template-rows: 50px 200px 1fr 200px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 50px 150px;
    grid-template-rows: 50px 1fr 500px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 50px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 50px 30px;
  }
`;

export default function Experience() {
  return (
    <ExperienceContainer gap="40px" id="experience">
      <Container place="center start">
        <TextBig>Experience</TextBig>
      </Container>
      <Container>
        <TextLarge>
          Over the past 4+ years and in parallel with my studies I have had the
          chance to apply some of my skills and expertises in real-world
          scenarios and applications. Having experience working in multiple
          academic research projects, in design research labs and in commercial
          projects for companies such as Signify (Ex. Philips Lighting) has
          helped me shape my working attitude and gain new insights on improving
          myself.
        </TextLarge>
      </Container>
      <Container>
        <ExperienceList />
      </Container>
    </ExperienceContainer>
  );
}
