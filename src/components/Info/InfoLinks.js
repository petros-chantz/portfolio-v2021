import React from "react";
import { Container } from "../Container";
import IconBox from "../IconBox";
import { light, dark } from "./../../helpers/themes";

function InfoLinksItem(props) {
  return (
    <a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
      <IconBox image={props.image} imageHeight={props.imageHeight} />
    </a>
  );
}

export default function InfoLinks(props) {
  return (
    <>
      {props.colorTheme ? (
        <Container columns="repeat(4,1fr)" gap="50px">
          <InfoLinksItem
            image={light.icons.email}
            imageHeight="50"
            linkUrl="#"
          />
          <InfoLinksItem image={light.icons.cv} imageHeight="50" linkUrl="#" />
          <InfoLinksItem
            image={light.icons.github}
            imageHeight="50"
            linkUrl="#"
          />
          <InfoLinksItem
            image={light.icons.linkedIn}
            imageHeight="50"
            linkUrl="#"
          />
        </Container>
      ) : (
        <Container columns="repeat(4,1fr)" gap="20px">
          <InfoLinksItem
            image={dark.icons.email}
            imageHeight="50"
            linkUrl="#"
          />
          <InfoLinksItem image={dark.icons.cv} imageHeight="50" linkUrl="#" />
          <InfoLinksItem
            image={dark.icons.github}
            imageHeight="50"
            linkUrl="#"
          />
          <InfoLinksItem
            image={dark.icons.linkedIn}
            imageHeight="50"
            linkUrl="#"
          />
        </Container>
      )}
    </>
  );
}
