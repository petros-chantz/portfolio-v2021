import React from "react";
import { Container } from "./../components/Container";
import SkillsText from "../components/Skills/SkillsText";
import SkillsTopicList from "../components/Skills/SkillsTopicList";
import { breakpoints } from "./../helpers/Media";
import styled from "styled-components";
import SkillsStack from "../components/Skills/SkillsStack";

const SkillsPadding = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 500px 150px 500px;
    grid-template-rows: 1fr 1fr 200px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 190px 200px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 190px 200px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 150px 150px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 150px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 150px 30px;
  }
`;

export default function Skills() {
  return (
    <SkillsPadding gap="40px" place="center" id="skills">
      <SkillsText />
      <SkillsTopicList />
      <SkillsStack />
    </SkillsPadding>
  );
}
