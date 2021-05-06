import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { TextRegular } from "../Text";
import { breakpoints } from "./../../helpers/Media";
import skills from "./../../Data/skills.json";

const ContainerSkillsTopic = styled(Container)`
  background-color: ${(props) => props.theme.color.background};
  border: 4px solid ${(props) => props.theme.color.text};
  border-radius: 4px;
`;

function SkillsTopic(props) {
  const { skills } = props;
  return (
    <ContainerSkillsTopic rows="70px 250px">
      <Container place="center">
        <TextRegular transform="uppercase" fontWeight="800">
          {skills.expertiseName}
        </TextRegular>
      </Container>
      <Container place="center start" padding="20px">
        <TextRegular>{skills.skills.skill1}</TextRegular>
        <TextRegular>{skills.skills.skill2}</TextRegular>
        <TextRegular>{skills.skills.skill3}</TextRegular>
        <TextRegular>{skills.skills.skill4}</TextRegular>
        <TextRegular>{skills.skills.skill5}</TextRegular>
        <TextRegular>{skills.skills.skill6}</TextRegular>
      </Container>
    </ContainerSkillsTopic>
  );
}

const ContainerSkillsList = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export default function SkillsTopicList() {
  return (
    <ContainerSkillsList gap="50px">
      {Object.keys(skills).map((id) => {
        return (
          <>
            <SkillsTopic skills={skills[id]} key={skills[id]} />
          </>
        );
      })}
    </ContainerSkillsList>
  );
}
