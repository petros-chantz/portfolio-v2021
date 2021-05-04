import React from "react";
import { Container } from "../components/Container";
import { breakpoints } from "./../helpers/Media";
import styled from "styled-components";
import ExperienceYearsList from "../components/Experience/ExperienceYearsList";
import { Text } from "../components/Text";

const PaddingExperience = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 500px 0px 500px;
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
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 0px 30px;
  }
`;

export default function Experience() {
  return (
    <PaddingExperience gap="50px" id="experience">
      <Container>
        <Text fontSize="40px" fontWeight="600" textAlign="justify">
          I’m not afraid to say ‘I don’t know’ but also ‘I would like you to
          show me how to do it better’. I embrace self-reflection and
          self-directed and continuous learning.
        </Text>
      </Container>
      <Container>
        <ExperienceYearsList />
      </Container>
    </PaddingExperience>
  );
}
