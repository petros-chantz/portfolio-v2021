import React from "react";
import { Container } from "../Container";
import { QuotationMarks, TitleRegular } from "../Text";

export default function ExperienceText() {
  return (
    <Container rows="200px 1fr 200px">
      <Container place="center start">
        <QuotationMarks>‘‘</QuotationMarks>
      </Container>
      <Container place="center" padding="0px 50px 0px 50px">
        <TitleRegular fontSize="40px" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TitleRegular>
      </Container>
      <Container place="center end">
        <QuotationMarks>’’</QuotationMarks>
      </Container>
    </Container>
  );
}
