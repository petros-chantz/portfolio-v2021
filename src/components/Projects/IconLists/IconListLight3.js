import React from "react";
import { Container } from "../../Container";
import Github from "../../../images/IconComponents/Github";
import Flag from "../../../images/IconComponents/Flag";
import { LinkIcon } from "../../Link";
import { light } from "../../../helpers/themes";

export default function IconListDark3(props) {
  const { project } = props;
  return (
    <>
      <Container place="center start">
        <LinkIcon
          href={project.links.linkA.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flag color={light.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href={project.links.linkB.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color={light.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href={project.links.linkB.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reflection
        </LinkIcon>
      </Container>
    </>
  );
}
