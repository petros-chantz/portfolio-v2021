import React from "react";
import { SkillsContainer } from "./../components/Container";
import SkillsTopicList from "../components/Skills/SkillsTopicList";
import SkillsStack from "../components/Skills/SkillsStack";
import { Text } from "../components/Text";

export default function Skills() {
  return (
    <SkillsContainer
      gap="40px"
      place="center"
      id="skills"
      padding="100px 0px 100px 0px"
    >
      <Text fontSize="40px" textAlign="justify" fontWeight="600">
        I wear a lot of hats and more often than not they overlap one another. I
        acquire a broad, flexible and interdisciplinarity skillset which I use
        based on the task at hand.
      </Text>
      <SkillsTopicList />
      <SkillsStack />
    </SkillsContainer>
  );
}
