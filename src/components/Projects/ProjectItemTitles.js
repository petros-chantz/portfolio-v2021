import React from "react";
import { Container } from "../Container";
import { TextRegular } from "../Text";

export default function ProjectItemTitles(props) {
  const { project } = props;
  return (
    <Container columns="2fr 1fr">
      <Container place="center start">
        <TextRegular fontWeight="700" spacing="1px">
          {project.title}
        </TextRegular>
      </Container>
      <Container place="center end">
        <TextRegular>{project.projectType}</TextRegular>
      </Container>
    </Container>
  );
}
