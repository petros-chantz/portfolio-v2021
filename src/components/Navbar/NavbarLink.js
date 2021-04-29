import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "../Container";
import { Text } from "../Text";

export default function NavbarLink(props) {
  return (
    <>
      <Container place="center">
        <HashLink smooth to={props.HashLink}>
          <Text fontSize="18px" fontWeight="400" transform="uppercase">
            {props.HashLinkName}
          </Text>
        </HashLink>
      </Container>
    </>
  );
}
