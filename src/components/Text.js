import styled from "styled-components";
import { breakpoints } from "./../helpers/Media";

export const TextHuge = styled.h2`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.transform};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.spacing};

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

export const TextBig = styled.h4`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.transform};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.spacing};

  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 40px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 35px;
  }
`;

export const TextLarge = styled.h6`
  color: ${(props) => props.theme.color.text};
  font-weight: 400;
  text-align: justify;
  line-height: 35px;
  letter-spacing: 1px;

  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 30px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 25px;
  }
`;

export const TextRegular = styled.p`
  color: ${(props) => props.theme.color.text};
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.transform};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.spacing};
`;
