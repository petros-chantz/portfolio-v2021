import React from "react";
import { Container } from "../components/Container";
import InfoLinks from "../components/Info/InfoLinks";
import InfoPhoto from "../components/Info/InfoPhoto";
import InfoText from "../components/Info/InfoText";
import InfoTitle from "../components/Info/InfoTitle";
import styled from "styled-components";
import { breakpoints } from "./../helpers/Media";

const InfoContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 300px 50px 300px;
  }

  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 200px 50px 200px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 50px 150px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 50px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 50px 30px;
  }
`;

export default function Info(props) {
  return (
    <InfoContainer gap="50px">
      <Container place="center" gap="50px">
        <InfoPhoto />
        <InfoTitle />
      </Container>
      <Container gap="50px">
        <InfoText />
        <Container place="center">
          <InfoLinks colorTheme={props.colorTheme} />
        </Container>
      </Container>
    </InfoContainer>
  );
}
