import React from "react";
import { Container } from "./../components/Container";
import { LinkIcon } from "./Link";

export default function IconBoxLink(props) {
  return (
    <Container place="center start">
      <LinkIcon href={props.linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt={props.image} height={props.imageHeight} />
      </LinkIcon>
    </Container>
  );
}
