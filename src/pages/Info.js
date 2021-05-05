import React from "react";
import { Container, InfoContainer } from "../components/Container";
import InfoLinks from "../components/Info/InfoLinks";
import InfoPhoto from "../components/Info/InfoPhoto";
import InfoText from "../components/Info/InfoText";
import InfoTitle from "../components/Info/InfoTitle";

export default function Info(props) {
  return (
    <InfoContainer gap="50px" padding="100px 0px 100px 0px">
      <Container>
        <InfoPhoto />
      </Container>
      <Container gap="50px">
        <InfoTitle />
        <InfoText />
        <InfoLinks colorTheme={props.colorTheme} />
      </Container>
    </InfoContainer>
  );
}
