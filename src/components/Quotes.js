import React from "react";
import { Container } from "./Container";
import { QuotationMarks, TitleRegular } from "./Text";

export default function Quotes(props) {
  return (
    <Container rows="120px 1fr 120px">
      <Container place="center start">
        <QuotationMarks>‘‘</QuotationMarks>
      </Container>
      <Container place="center" padding="0px 50px 0px 50px">
        <TitleRegular fontSize="40px" textAlign="justify">
          {props.quotesText}
        </TitleRegular>
      </Container>
      <Container place="center end">
        <QuotationMarks>’’</QuotationMarks>
      </Container>
    </Container>
  );
}
