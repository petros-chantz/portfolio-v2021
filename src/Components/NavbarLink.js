import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "../Components/Containers";
import { Text } from "./../Components/TextElements";

export default function NavbarLink(props) {
  return (
    <Container place="center">
      <HashLink smooth to={props.HashLink}>
        <Text
          fontSize={props.navBarfontSize}
          fontWeight="300"
          transform="uppercase"
        >
          {props.HashLinkName}
        </Text>
      </HashLink>
    </Container>
  );
}
