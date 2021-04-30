import React from "react";
import { Container } from "../../Container";
import Report from "../../../images/IconComponents/Report";
import Camera from "../../../images/IconComponents/Camera";
import { LinkIcon } from "../../Link";
import { dark } from "../../../helpers/themes";

export default function IconListDark2(props) {
  const { project } = props;
  return (
    <>
      <Container place="center start">
        <LinkIcon
          href={project.links.linkA.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Report color={dark.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href={project.links.linkB.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Camera color={dark.color.link} />
        </LinkIcon>
      </Container>
    </>
  );
}
