import styled from "styled-components";
import { Container } from "../Container";
import { TitleRegular } from "../Text";
import { breakpoints } from "./../../helpers/Media";

const InfoTextRegular = styled(TitleRegular)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 30px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 25px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 25px;
  }
`;

export default function InfoText() {
  return (
    <Container gap="70px" padding="0px 30px 0px 0px ">
      <InfoTextRegular
        textAlign="justify"
        spacing="1px"
        lineHeight="35px"
        fontWeight="400"
      >
        I’m a UX Researcher and an all-around Creative Technologist. I hold a
        Master's Degree in Constructive Design Research from Technical
        University of Eindhoven. My emphasis is on the use of data as a design
        material.
      </InfoTextRegular>
      <InfoTextRegular
        textAlign="justify"
        spacing="1px"
        fontWeight="400"
        lineHeight="35px"
      >
        I’m ready to take the next step and join your team!
      </InfoTextRegular>
    </Container>
  );
}
