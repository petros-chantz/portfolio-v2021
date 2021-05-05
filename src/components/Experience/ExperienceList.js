import React from "react";
import { Container } from "../Container";
import { breakpoints } from "../../helpers/Media";
import styled from "styled-components";
import ExperienceListItem from "./ExperienceListItem";

const PaddingExperience = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }

  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;

export default function ExperienceList() {
  return (
    <PaddingExperience gap="50px">
      <ExperienceListItem number="5" topic="research projects" />
      <ExperienceListItem number="3" topic="commercial projects" />
      <ExperienceListItem number="25+" topic="stakeholder collaborations" />
      <ExperienceListItem number="3+" topic="years of commercial experience" />
    </PaddingExperience>
  );
}
