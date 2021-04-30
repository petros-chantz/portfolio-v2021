import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  cursor: pointer;
  border: 4px solid ${(props) => props.theme.color.background};
  padding: 10px;
  border-radius: 4px;

  :hover {
    border: 4px solid ${(props) => props.theme.color.text};
  }
`;
