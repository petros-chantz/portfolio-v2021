import React from "react";
import { Container } from "../Container";
import { Text } from "../Text";

export default function ExperienceYearsListItem(props) {
  return (
    <Container place="center" rows="3fr 1fr">
      <Container>
        <Text fontSize="96px" fontWeight="700" textAlign="center">
          {props.number}
        </Text>
      </Container>
      <Container>
        <Text textAlign="center">{props.topic}</Text>
      </Container>
    </Container>
  );
}
