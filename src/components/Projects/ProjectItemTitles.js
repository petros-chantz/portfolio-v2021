import React from "react";
import { Container } from "../Container";
import { Text } from "../Text";

export default function ProjectItemTitles(props) {
  const { project } = props;
  return (
    <Container columns="2fr 1fr">
      <Container place="center start">
        <Text fontWeight="700">{project.title}</Text>
      </Container>
      <Container place="center end">
        <Text>{project.projectType}</Text>
      </Container>
    </Container>
  );
}
