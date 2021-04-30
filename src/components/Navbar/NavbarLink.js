import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "../Container";
import { Link } from "../Link";

export default function NavbarLink(props) {
  return (
    <>
      <Container place="center">
        <HashLink smooth to={props.HashLink}>
          <Link fontSize="18px" fontWeight="400" transform="uppercase">
            {" "}
            {props.HashLinkName}
          </Link>
        </HashLink>
      </Container>
    </>
  );
}
