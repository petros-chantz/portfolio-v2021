import styled from "styled-components";
import { breakpoints } from "./../helpers/Media";

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

export const Padding = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 550px 50px 550px;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 200px 50px 200px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 180px 50px 180px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 50px 150px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 50px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 50px 30px;
  }
`;

export const ContainerSkillsStack = styled(Container)`
  background-color: ${(props) => props.theme.color.backgroundSkillsStack};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const ContainerSkillsStackItem = styled(Container)`
  background-color: ${(props) => props.theme.color.backgroundSkillsStack};
`;

export const ContainerExperienceYearsItem = styled(Container)`
  border: 4px solid ${(props) => props.theme.color.text};
  border-radius: 4px;
`;
