import React from "react";
import { Padding } from "./../components/Container";
import Quotes from "./../components/Quotes";
import SkillsTopicList from "../components/Skills/SkillsTopicList";
import { breakpoints } from "./../helpers/Media";
import styled from "styled-components";
import SkillsStack from "../components/Skills/SkillsStack";

const SkillsContainer = styled(Padding)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-rows: 1fr 300px 200px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-rows: 1fr 1fr 200px;
  }
`;

export default function Skills() {
  return (
    <SkillsContainer gap="40px" place="center" id="skills">
      <Quotes
        quotesText="I wear a lot of hats and more often than not they overlap one another.
         I strongly believe that designing products, services and or systems for societal
          impact require a certain breadth, interdisciplinarity and flexibility
           in one’s own skillset. I’m not afraid to say
      ‘I don’t know’ but also ‘I would like you to show me how
      to do it better’. My personal motto is self-reflect and keep on learning!"
      />
      <SkillsTopicList />
      <SkillsStack />
    </SkillsContainer>
  );
}
