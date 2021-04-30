import styled from "styled-components";
import { Container } from "../Container";
import { TitleRegular } from "../Text";
import { breakpoints } from "./../../helpers/Media";

const InfoTextRegular = styled(TitleRegular)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 40px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 30px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 25px;
  }
`;

export default function InfoText() {
  return (
    <Container gap="70px" padding="0px 30px 0px 0px ">
      <InfoTextRegular textAlign="justify" spacing="2px" fontWeight="400">
        I’m a UX Researcher and an all-around Creative Technologist. I hold a
        Master's Degree in Constructive Design Research from Technical
        University of Eindhoven. My emphasis is on the use of data as a design
        material.
      </InfoTextRegular>
      <InfoTextRegular textAlign="justify" fontWeight="400">
        I’m ready to take the next step and join your team!
      </InfoTextRegular>
    </Container>
  );
}
