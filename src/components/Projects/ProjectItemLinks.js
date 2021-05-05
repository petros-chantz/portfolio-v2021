import React from "react";
import { Container } from "../Container";
import { light, dark } from "../../helpers/themes";
import IconList3 from "./IconLists/IconList3";
import IconList2 from "./IconLists/IconList2";

export default function ProjectItemLinks(props) {
  const { project } = props;
  return (
    <>
      {props.colorTheme ? (
        <Container columns="repeat(3, 100px)" place="center start">
          {project.extraLinks ? (
            <>
              <IconList3 project={project} themeColor={light.color.link} />
            </>
          ) : (
            <IconList2 project={project} themeColor={light.color.link} />
          )}
        </Container>
      ) : (
        <Container columns="repeat(3, 100px)" place="center start">
          {project.extraLinks ? (
            <IconList3 project={project} themeColor={dark.color.link} />
          ) : (
            <IconList2 project={project} themeColor={dark.color.link} />
          )}
        </Container>
      )}
    </>
  );
}
