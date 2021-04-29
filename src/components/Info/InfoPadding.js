import styled from "styled-components";
import { breakpoints } from "./../../helpers/Media";
import { Container } from "./../Container";

export const InfoPadding = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 500px 150px 500px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 190px 200px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 190px 200px 190px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 150px 150px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 150px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 150px 30px;
    grid-template-rows: 200px 1fr;
  }
`;
