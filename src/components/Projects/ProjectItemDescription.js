import React from "react";
import { Container } from "../Container";
import { TextRegular } from "../Text";

export default function ProjectItemDescription(props) {
  const { project } = props;
  return (
    <Container place="center">
      <TextRegular textAlign="justify">{project.description}</TextRegular>
    </Container>
  );
}
