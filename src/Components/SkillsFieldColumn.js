import React from "react";
import { Container } from "./Containers";
import { Text } from "./TextElements";

export default function SkillsFieldColumn(props) {
  const { skills } = props;
  return (
    <Container rows="1fr 3fr">
      <Container>
        <Text fontWeight="700">{skills.expertiseName}</Text>
      </Container>
      <Container rows="repeat(6,1fr)" gap="10px">
        <Text>{skills.skills.skill1}</Text>
        <Text>{skills.skills.skill2}</Text>
        <Text>{skills.skills.skill3}</Text>
        <Text>{skills.skills.skill4}</Text>
        <Text>{skills.skills.skill5}</Text>
        <Text>{skills.skills.skill6}</Text>
      </Container>
    </Container>
  );
}
