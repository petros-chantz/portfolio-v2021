import React from "react";
import { Container, ContainerHome } from "./../Components/Containers";
import HomeTextContent from "../Components/HomeTextContent.js";
import HomePhoto from "../Components/HomePhoto";

export default function Home(props) {
  return (
    <ContainerHome columns="repeat(2, 1fr)" gap="30px">
      <Container place="center">
        <HomePhoto />
      </Container>
      <Container place="center start">
        <HomeTextContent />
      </Container>
    </ContainerHome>
  );
}
