import React from "react";
import { Container } from "../Container";
import IconListDark2 from "./IconLists/IconListDark2";
import IconListDark3 from "./IconLists/IconListDark3";
import IconListLight2 from "./IconLists/IconListLight2";
import IconListLight3 from "./IconLists/IconListLight3";

export default function ProjectItemLinks(props) {
  const { project } = props;
  return (
    <>
      {props.colorTheme ? (
        <Container columns="repeat(3, 100px)" place="center start">
          {project.extraLinks ? (
            <IconListLight3 project={project} />
          ) : (
            <IconListLight2 project={project} />
          )}
        </Container>
      ) : (
        <Container columns="repeat(3, 100px)" place="center start">
          {project.extraLinks ? (
            <IconListDark3 project={project} />
          ) : (
            <IconListDark2 project={project} />
          )}
        </Container>
      )}
    </>
  );
}
