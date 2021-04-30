import React from "react";
import { Container } from "../Container";
import { QuotationMarks, TitleRegular } from "../Text";

export default function SkillsText() {
  return (
    <Container rows="200px 1fr 200px">
      <Container place="center start">
        <QuotationMarks>‘‘</QuotationMarks>
      </Container>
      <Container place="center" padding="0px 50px 0px 50px">
        <TitleRegular fontSize="40px" textAlign="justify">
          I wear a lot of hats. I’m a strong believer in the practise of
          self-directed and continuous learning and the ability to self reflect
          before action taking.
        </TitleRegular>
      </Container>
      <Container place="center end">
        <QuotationMarks>’’</QuotationMarks>
      </Container>
    </Container>
  );
}
