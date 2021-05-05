import React from "react";
import { ContainerLinkIcon } from "./Container";
import { LinkIcon } from "./Link";

export default function IconBoxLink(props) {
  return (
    <>
      <ContainerLinkIcon place="center">
        <LinkIcon
          href={props.iconLinkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.iconComponent}
        </LinkIcon>
      </ContainerLinkIcon>
    </>
  );
}
