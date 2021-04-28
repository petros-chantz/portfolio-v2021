import React from "react";
import { Container, ContainerPage } from "../Components/Containers";
import { Text } from "../Components/TextElements";

export default function Footer() {
  return (
    <ContainerPage columns="repeat(2, 1fr)" margin="100px 0px 20px 0px">
      <Container place="center start">
        <Text>Petros Chantzopoulos - April 2021 - v3.0.0</Text>
      </Container>
      <Container place="center end">
        <Text fontSize="12px">
          Made with love, React.js, AWS and a lot of coffee!
        </Text>
      </Container>
    </ContainerPage>
  );
}
