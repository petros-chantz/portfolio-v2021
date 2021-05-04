import React from "react";
import { ContainerLinkIcon } from "../Container";
import Email from "../../images/IconComponents/Email";
import Cv from "../../images/IconComponents/Cv";
import LinkedIn from "../../images/IconComponents/LinkedIn";
import Github from "../../images/IconComponents/Github";
import { LinkIcon } from "../Link";
import { dark } from "../../helpers/themes";

export default function InfoLinksIconsListDark(props) {
  return (
    <>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email color={dark.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cv color={dark.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn color={dark.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
      <ContainerLinkIcon place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color={dark.color.link} />
        </LinkIcon>
      </ContainerLinkIcon>
    </>
  );
}
