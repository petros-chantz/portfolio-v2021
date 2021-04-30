import React from "react";
import { Container } from "../Container";
import IconBoxLink from "../IconBoxLink";
import { Text } from "../Text";
// import reportIcon from "./../../images/icons/report.svg";
// import cameraIcon from "./../../images/icons/camera.svg";
// import githubIcon from "./../../images/icons/github.svg";

function ProjectItemTitles(props) {
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
      <IconBoxLink />
      {/* <IconBoxLink image={ReportIcon} imageHeight="40" />
      <IconBoxLink image={ReportIcon} imageHeight="50" />
      <IconBoxLink image={ReportIcon} imageHeight="40" /> */}
    </Container>
  );
}

export default function ProjectItemContent(props) {
  const { project } = props;
  return (
    <Container gap="25px">
      <ProjectItemTitles project={project} />
      <ProjectItemDescription project={project} />
      <ProjectItemLinks project={project} />
    </Container>
  );
}

// width = "100%";
