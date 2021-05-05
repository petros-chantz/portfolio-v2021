import React from "react";
import { ExperienceContainer, Container } from "../components/Container";
import ExperienceList from "../components/Experience/ExperienceList";
import { TextBig, TextLarge } from "../components/Text";

export default function Experience() {
  return (
    <ExperienceContainer
      gap="50px"
      id="experience"
      padding="100px 0px 100px 0px"
    >
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
