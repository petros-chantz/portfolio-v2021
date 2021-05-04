import React from "react";
import { ExperienceContainer, Container } from "../components/Container";
import ExperienceYearsList from "../components/Experience/ExperienceYearsList";
import { Text } from "../components/Text";

export default function Experience() {
  return (
    <ExperienceContainer gap="50px" id="experience">
      <Container padding="0px 50px 0px 0px">
        <Text fontSize="40px" fontWeight="600" textAlign="justify">
          I’m not afraid to say ‘I don’t know’ but also ‘I would like you to
          show me how to do it better’. I embrace self-reflection and
          self-directed and continuous learning.
        </Text>
      </Container>
      <Container>
        <ExperienceYearsList />
      </Container>
    </ExperienceContainer>
  );
}
