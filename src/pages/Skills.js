import React from "react";
import { SkillsContainer } from "./../components/Container";
import SkillsTopicList from "../components/Skills/SkillsTopicList";
import SkillsStack from "../components/Skills/SkillsStack";
import { TextLargerge } from "../components/Text";

export default function Skills() {
  return (
    <SkillsContainer
      gap="40px"
      place="center"
      id="skills"
      padding="100px 0px 100px 0px"
    >
      <TextLarge>
        I wear a lot of hats and more often than not they overlap one another. I
        acquire a broad, flexible and interdisciplinarity skillset which I use
        based on the task at hand. I’m not afraid to say ‘I don’t know’ but also
        ‘I would like you to show me how to do it better’. I embrace an attitude
        of self-reflection and self-directed and continuous learning.
      </TextLarge>
      <SkillsTopicList />
      <SkillsStack />
    </SkillsContainer>
  );
}
