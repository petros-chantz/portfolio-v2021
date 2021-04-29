import React from "react";
import { Container } from "../Container";
import { breakpoints } from "./../../helpers/Media";
import styled from "styled-components";
import ExperienceYearsListItem from "./ExperienceYearsListItem";

const PaddingExperience = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
  }
`;

export default function ExperienceYearsList() {
  return (
    <Container gap="100px">
      <ExperienceYearsListItem number="5" topic="research projects" />
      <ExperienceYearsListItem number="3" topic="commercial projects" />
      <ExperienceYearsListItem
        number="25+"
        topic="stakeholder collaborations"
      />
      <ExperienceYearsListItem
        number="3+"
        topic="years of commercial experience"
      />
    </Container>
  );
}
