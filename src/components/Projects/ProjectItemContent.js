import React from "react";
import { Container } from "../Container";
import { Text } from "../Text";

function ProjectItemTitles(props) {
  const { project } = props;
  return (
    <Container columns="2fr 1fr">
      <Container place="center start">
        <Text>{project.title}</Text>
      </Container>
      <Container place="center end">
        <Text>{project.projectType}</Text>
      </Container>
    </Container>
  );
}

function ProjectItemDescription(props) {
  const { project } = props;
  return (
    <Container place="center">
      <Text textAlign="justify">{project.description}</Text>
    </Container>
  );
}

function ProjectItemLinks(props) {
  const { project } = props;
  return (
    <Container columns="repeat(3, 100px)" place="center start">
      <Container place="center start">report</Container>
      <Container place="center start">photos</Container>
      <Container place="center start">github</Container>
    </Container>
  );
}

export default function ProjectItemContent(props) {
  const { project } = props;
  return (
    <Container gap="25px">
      <ProjectItemTitles project={props.project} />
      <ProjectItemDescription project={props.project} />
      <ProjectItemLinks project={props.project} />
    </Container>
  );
}
