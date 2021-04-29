import styled from "styled-components";

export const Link = styled.a`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.transform};
  line-height: ${(props) => props.lineHeight};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.color.link};
  }
`;

export const LinkVisible = styled(Link)`
  color: ${(props) => props.theme.color.link};
`;
