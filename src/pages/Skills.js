import React from "react";
import { SkillsContainer } from "./../components/Container";
import Quotes from "./../components/Quotes";
import SkillsTopicList from "../components/Skills/SkillsTopicList";
import SkillsStack from "../components/Skills/SkillsStack";

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
