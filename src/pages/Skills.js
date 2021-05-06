import React from "react";
import { Container } from "./../components/Container";
import SkillsTopicList from "../components/Skills/SkillsTopicList";
import SkillsStack from "../components/Skills/SkillsStack";
import { TextLarge, TextBig } from "../components/Text";
import styled from "styled-components";
import { breakpoints } from "./../helpers/Media";

export const SkillsContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 300px 50px 300px;
    grid-template-rows: 50px 150px 1fr 200px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 200px 50px 200px;
    grid-template-rows: 50px 200px 1fr 200px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 50px 150px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 50px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 50px 30px;
  }
`;

export default function Skills() {
  return (
    <SkillsContainer gap="40px" id="skills">
      <Container place="center start">
        <TextBig textAlign="left">Skills</TextBig>
      </Container>
      <TextLarge>
        I wear a lot of hats and more often than not they overlap one another. I
        acquire a broad, flexible and interdisciplinarity skillset which I use
        based on the task at hand. I’m not afraid to say ‘I don’t know’ but also
        ‘I would like you to show me how to do it better’. I embrace an attitude
        of self-reflection and self-directed and continuous learning.
      </TextLarge>
      <SkillsTopicList />
      <Container place="center">
        <SkillsStack />
      </Container>
    </SkillsContainer>
  );
}
