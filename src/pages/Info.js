import React from "react";
import { Container } from "../components/Container";
import InfoLinks from "../components/Info/InfoLinks";
import { InfoContainer } from "../components/Info/InfoContainer";
import HomePhoto from "../components/Info/InfoPhoto";
import InfoText from "../components/Info/InfoText";
import InfoTitle from "../components/Info/InfoTitle";

export default function Info(props) {
  return (
    <InfoContainer gap="50px">
      <Container>
        <HomePhoto />
      </Container>
      <Container gap="50px">
        <InfoTitle />
        <InfoText />
        <InfoLinks colorTheme={props.colorTheme} />
      </Container>
    </InfoContainer>
  );
}
