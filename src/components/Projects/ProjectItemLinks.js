import React from "react";
import { Container } from "../Container";

export default function ProjectItemLinks(props) {
  const { project } = props;
  return (
    <Container columns="repeat(3, 100px)" place="center start"></Container>
  );
}
