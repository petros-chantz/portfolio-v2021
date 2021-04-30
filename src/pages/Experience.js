import React from "react";
import { Container } from "../components/Container";
import { breakpoints } from "./../helpers/Media";
import styled from "styled-components";
import ExperienceYearsList from "../components/Experience/ExperienceYearsList";
import Quotes from "../components/Quotes";

const PaddingExperience = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 500px 0px 500px;
    grid-template-rows: 800px;
    grid-template-columns: 2fr 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 190px 0px 190px;
    grid-template-rows: 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 190px 0px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 0px 150px;
    grid-template-rows: 1fr 500px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 0px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 0px 30px;
  }
`;

export default function Experience() {
  return (
    <PaddingExperience gap="50px" id="experience">
      <Container padding="0px 50px 0px 0px">
        <Quotes
          quotesText="How are all these skills useful to you? Over the past 4+ years I have
        had the chance to work in multiple academic research projects, in design
        research labs and in commercial projects for
        companies such as Signify (Ex. Philips Lighting)."
        />
      </Container>
      <Container>
        <ExperienceYearsList />
      </Container>
    </PaddingExperience>
  );
}
