import styled from "styled-components";
import { breakpoints } from "../../helpers/Media";
import { Padding } from "../Container";

export const InfoContainer = styled(Padding)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    grid-template-rows: 200px 1fr;
  }
`;
