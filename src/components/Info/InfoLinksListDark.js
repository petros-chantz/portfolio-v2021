import React from "react";
import { Container } from "../Container";
import Email from "../../images/IconComponents/Email";
import Cv from "../../images/IconComponents/Cv";
import LinkedIn from "../../images/IconComponents/LinkedIn";
import Github from "../../images/IconComponents/Github";
import { LinkIcon } from "../Link";
import { dark } from "../../helpers/themes";

export default function InfoLinksIconsListDark(props) {
  return (
    <>
      <Container place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email color={dark.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cv color={dark.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn color={dark.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href={props.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color={dark.color.link} />
        </LinkIcon>
      </Container>
    </>
  );
}
