import React from "react";
import { Container } from "../Container";
import { TextHuge, TextRegular } from "../Text";

export default function ExperienceYearsListItem(props) {
  return (
    <Container place="center" rows="3fr 1fr">
      <Container>
        <TextHuge fontWeight="700" textAlign="center">
          {props.number}
        </TextHuge>
      </Container>
      <Container>
        <TextRegular textAlign="center" fontWeight="600" spacing="1px">
          {props.topic}
        </TextRegular>
      </Container>
    </Container>
  );
}
