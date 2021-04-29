import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { Text } from "../Text";
import { breakpoints } from "./../../helpers/Media";
import skills from "./../../data/skills.json";

const ContainerSkillsTopic = styled(Container)`
  background-color: ${(props) => props.theme.color.background};
  border: 4px solid ${(props) => props.theme.color.text};
  border-radius: 4px;

  :hover {
    border: 4px solid ${(props) => props.theme.color.link};
  }
`;

function SkillsTopic(props) {
  const { skills } = props;
  return (
    <ContainerSkillsTopic rows="70px 200px">
      <Container place="center">
        <Text transform="uppercase" fontWeight="500">
          {skills.expertiseName}
        </Text>
      </Container>
      <Container place="center start" padding="20px">
        <Text>{skills.skills.skill1}</Text>
        <Text>{skills.skills.skill2}</Text>
        <Text>{skills.skills.skill3}</Text>
        <Text>{skills.skills.skill4}</Text>
        <Text>{skills.skills.skill5}</Text>
        <Text>{skills.skills.skill6}</Text>
      </Container>
    </ContainerSkillsTopic>
  );
}

const ContainerSkillsList = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    width: 70%;
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
