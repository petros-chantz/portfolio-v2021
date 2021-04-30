import React from "react";
import { Container } from "../Container";
import InfoLinksIconsListDark from "./InfoLinksListDark";
import InfoLinksIconsListLight from "./InfoLinksListLight";

export default function InfoLinks(props) {
  return (
    <>
      {props.colorTheme ? (
        <Container columns="repeat(4,1fr)" gap="50px">
          <InfoLinksIconsListLight />
        </Container>
      ) : (
        <Container columns="repeat(4,1fr)" gap="50px">
          <InfoLinksIconsListDark />
        </Container>
      )}
    </>
  );
}
