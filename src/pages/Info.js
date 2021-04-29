import React from "react";
import { Container } from "../components/Container";
import InfoLinks from "../components/Info/InfoLinks";
import { InfoPadding } from "../components/Info/InfoPadding";
import HomePhoto from "../components/Info/InfoPhoto";
import InfoText from "../components/Info/InfoText";
import InfoTitle from "../components/Info/InfoTitle";

export default function Info(props) {
  return (
    <InfoPadding gap="50px">
      <Container>
        <HomePhoto />
      </Container>
      <Container gap="50px">
        <InfoTitle />
        <InfoText />
        <InfoLinks colorTheme={props.colorTheme} />
      </Container>
    </InfoPadding>
  );
}
