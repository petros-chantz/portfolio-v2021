import React from "react";
import { ContainerLinkIcon } from "../Container";
import Email from "../../images/IconComponents/Email";
import Cv from "../../images/IconComponents/Cv";
import LinkedIn from "../../images/IconComponents/LinkedIn";
import Github from "../../images/IconComponents/Github";
import { LinkIcon } from "../Link";
import { light } from "../../helpers/themes";

export default function InfoLinksIconsListLight(props) {
  return (
    <>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email color={light.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cv color={light.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn color={light.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color={light.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
    </>
  );
}
