import React from "react";
import { Container } from "../Container";
import { Text } from "../Text";

export default function ProjectItemDescription(props) {
  const { project } = props;
  return (
    <Container place="center">
      <Text textAlign="justify">{project.description}</Text>
    </Container>
  );
}
