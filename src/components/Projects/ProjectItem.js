import React from "react";
import { Container } from "../Container";
import ProjectItemContent from "./ProjectItemContent";
import ProjectItemPhoto from "./ProjectItemPhoto";

export default function ProjectItem(props) {
  const { project } = props;
  return (
    <Container rows="2fr 1fr" place="center" gap="30px" width="100%">
      <ProjectItemPhoto project={project} />
      <ProjectItemContent project={project} />
    </Container>
  );
}
