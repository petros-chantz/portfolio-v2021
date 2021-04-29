import styled from "styled-components";

export const TitleBig = styled.h2`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.transform};
  line-height: ${(props) => props.lineHeight};
`;

export const TitleRegular = styled.h4`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.transform};
  line-height: ${(props) => props.lineHeight};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.transform};
  line-height: ${(props) => props.lineHeight};
`;
