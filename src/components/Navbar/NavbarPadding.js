import styled from "styled-components";
import { breakpoints } from "./../../helpers/Media";
import { Container } from "./../Container";

export const NavbarPadding = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 50px 500px 0px 500px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 50px 200px 0px 200px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 50px 180px 0px 180px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 50px 150px 0px 150px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 50px 100px 0px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 50px 30px 0px 30px;
  }
`;
