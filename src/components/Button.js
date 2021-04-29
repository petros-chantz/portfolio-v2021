import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  cursor: pointer;
`;
