import React from "react";
import { Container } from "../Container";
import { TextRegular } from "../Text";

export default function ProjectItemDescription(props) {
  const { project } = props;
  return (
    <Container place="center">
      <TextRegular textAlign="justify" lineHeight="25px" spacing="1px">
        {project.description}
      </TextRegular>
    </Container>
  );
}
