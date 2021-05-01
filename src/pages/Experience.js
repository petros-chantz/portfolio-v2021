import React from "react";
import { Padding, Container } from "../components/Container";
import { breakpoints } from "./../helpers/Media";
import styled from "styled-components";
import ExperienceYearsList from "../components/Experience/ExperienceYearsList";
import Quotes from "../components/Quotes";

const ExperienceContainer = styled(Padding)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-rows: 800px;
    grid-template-columns: 2fr 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    grid-template-rows: 1fr;
  }

  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-rows: 1fr 500px;
    grid-template-columns: 1fr;
  }
`;

export default function Experience() {
  return (
    <ExperienceContainer gap="50px" id="experience">
      <Container padding="0px 50px 0px 0px">
        <Quotes
          quotesText="How are all these skills useful to you? Over the past 4+ years I have
        had the chance to work in multiple academic research projects as a research assistant, in design
        research labs as a lab assistant and in commercial projects for freelancers and
        companies such as Signify (Ex. Philips Lighting)."
        />
      </Container>
      <Container>
        <ExperienceYearsList />
      </Container>
    </ExperienceContainer>
  );
}
