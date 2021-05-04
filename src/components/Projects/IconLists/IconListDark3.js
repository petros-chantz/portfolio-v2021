import React from "react";
import { ContainerLinkIcon } from "../../Container";
import Github from "../../../images/IconComponents/Github";
import Flag from "../../../images/IconComponents/Flag";
import { LinkIcon } from "../../Link";
import { dark } from "../../../helpers/themes";

export default function IconListDark3(props) {
  const { project } = props;
  return (
    <>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={project.links.linkA.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flag color={dark.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={project.links.linkB.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color={dark.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={project.links.linkB.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reflection
        </LinkIcon>
      </ContainerLinkIcon>
    </>
  );
}
