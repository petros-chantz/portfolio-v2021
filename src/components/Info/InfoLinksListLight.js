import React from "react";
import { Container } from "../Container";
import Email from "../../images/IconComponents/Email";
import Cv from "../../images/IconComponents/Cv";
import LinkedIn from "../../images/IconComponents/LinkedIn";
import Github from "../../images/IconComponents/Github";
import { LinkIcon } from "../Link";
import { light } from "../../helpers/themes";

export default function InfoLinksIconsListLight(props) {
  return (
    <>
      <Container place="center start">
        <LinkIcon
          href="mailto: petros.chantz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email color={light.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href="https://www.dropbox.com/s/tfq10r1cp2ow0ua/Petros-Chantzopoulos-CV.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cv color={light.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href="https://www.linkedin.com/in/petroschantz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn color={light.color.link} />
        </LinkIcon>
      </Container>
      <Container place="center start">
        <LinkIcon
          href="https://github.com/petros-chantz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color={light.color.link} />
        </LinkIcon>
      </Container>
    </>
  );
}
