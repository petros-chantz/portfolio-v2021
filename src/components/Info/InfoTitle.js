import styled from "styled-components";
import { breakpoints } from "../../helpers/Media";
import { TitleBig } from "../Text";
import { Container } from "../Container";
import { Link } from "../Link";

const InfoTitleBig = styled(TitleBig)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 120px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 90px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 60px;
  }

  @media screen and (max-width: ${breakpoints.mobileMScreen}) {
    font-size: 50px;
  }

  @media screen and (max-width: ${breakpoints.mobileSScreen}) {
    font-size: 40px;
  }
`;

export default function InfoTitle() {
  return (
    <Container>
      <InfoTitleBig>Hey there,</InfoTitleBig>
      <InfoTitleBig>
        {" "}
        <Link
          href="https://www.linkedin.com/in/petroschantz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Petros
        </Link>{" "}
        here!
      </InfoTitleBig>
    </Container>
  );
}
