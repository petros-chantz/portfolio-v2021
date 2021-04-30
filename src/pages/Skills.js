import React from "react";
import { Container } from "./../components/Container";
import Quotes from "./../components/Quotes";
import SkillsTopicList from "../components/Skills/SkillsTopicList";
import { breakpoints } from "./../helpers/Media";
import styled from "styled-components";
import SkillsStack from "../components/Skills/SkillsStack";

const SkillsPadding = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 500px 0px 500px;
    grid-template-rows: 1fr 300px 200px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 190px 0px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 190px 0px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 0px 150px;
    grid-template-rows: 1fr 1fr 200px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 0px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 0px 30px;
  }
`;

export default function Skills() {
  return (
    <SkillsPadding gap="40px" place="center" id="skills">
      <Quotes
        quotesText="I wear a lot of hats. I’m a strong believer in the practise of 
      self-directed and continuous learning and the ability to self reflect before action taking.I’m a person who wears a lot of hats.
      Above all I am a strong believer in the practise of self-directed and continuous learning and the ability to self
      reflect before action taking."
      />
      <SkillsTopicList />
      <SkillsStack />
    </SkillsPadding>
  );
}
