import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.background};
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  grid-gap: ${(props) => props.gap};
  place-items: ${(props) => props.place};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ContainerApp = styled(animated(Container))``;

export const ContainerSkillsStackItem = styled(Container)`
  background-color: ${(props) => props.theme.color.backgroundSkillsStack};
  border-radius: 4px;
`;

export const ContainerExperienceYearsItem = styled(Container)`
  border: 4px solid ${(props) => props.theme.color.text};
  border-radius: 4px;
`;

export const ContainerLinkIcon = styled(Container)`
  transition: transform 250ms;
  :hover {
    transform: scale(1.2);
  }
`;
