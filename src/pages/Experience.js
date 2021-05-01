import React from "react";
import { ExperienceContainer, Container } from "../components/Container";
import ExperienceYearsList from "../components/Experience/ExperienceYearsList";
import Quotes from "../components/Quotes";

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
