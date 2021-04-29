import React from "react";
import { Container } from "./../components/Container";

export default function IconBox(props) {
  return (
    <Container place="center" padding="10px">
      <img src={props.image} alt={props.image} height={props.imageHeight} />
    </Container>
  );
}
