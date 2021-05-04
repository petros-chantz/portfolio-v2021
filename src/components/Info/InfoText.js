import styled from "styled-components";
import { Container } from "../Container";
import { TextLarge } from "../Text";
import { breakpoints } from "./../../helpers/Media";

export default function InfoText() {
  return (
    <Container gap="70px" padding="0px 30px 0px 0px ">
      <TextLarge>
        I’m a UX Researcher and an all-around Creative Technologist. I hold a
        Master's Degree in Constructive Design Research from Technical
        University of Eindhoven. My emphasis is on the use of data as a design
        material.
      </TextLarge>
      <TextLarge>I’m ready to take the next step and join your team!</TextLarge>
    </Container>
  );
}
