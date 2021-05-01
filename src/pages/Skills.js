import React from "react";
import { Container } from "./../components/Container";
import SkillsTopicList from "../components/Skills/SkillsTopicList";
import { breakpoints } from "./../helpers/Media";
import styled from "styled-components";
import SkillsStack from "../components/Skills/SkillsStack";
import { TitleRegular } from "../components/Text";

const SkillsPadding = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 500px 0px 500px;
    // grid-template-rows: 1fr 300px 200px;
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
    <SkillsPadding gap="80px" place="center" id="skills">
      <TitleRegular fontSize="40px" textAlign="justify">
        {" "}
        I wear a lot of hats and more often than not they overlap one another. I
        acquire a broad, flexible and interdisciplinarity skillset which I use
        based on the task at hand.{" "}
      </TitleRegular>
      <SkillsTopicList />
      <SkillsStack />
      <TitleRegular fontSize="40px" textAlign="justify">
        {" "}
        I’m not afraid to say ‘I don’t know’ but also ‘I would like you to show
        me how to do it better’. I embrace self-reflection and self-directed and
        continuous learning.{" "}
      </TitleRegular>
    </SkillsPadding>
  );
}
