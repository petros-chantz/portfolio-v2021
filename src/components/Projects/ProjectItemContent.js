import React from "react";
import { Container } from "../Container";
import ProjectItemTitles from "./ProjectItemTitles";
import ProjectItemDescription from "./ProjectItemDescription";
import ProjectItemLinks from "./ProjectItemLinks";

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
