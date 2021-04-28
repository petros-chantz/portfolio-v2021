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
`;

export const ContainerPage = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 550px 0px 550px;
  }

  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 200px 0px 200px;
  }

  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 180px 0px 180px;
  }

  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 0px 150px;
  }

  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 0px 100px;
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 0px 30px;
  }
`;

export const ContainerNavbar = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 20px 550px 0px 550px;
  }

  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 20px 200px 0px 200px;
  }

  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 20px 180px 0px 180px;
  }

  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 20px 150px 0px 150px;
  }

  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 20px 100px 0px 100px;
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 20px 30px 0px 30px;
  }
`;

export const ContainerSkillsStack = styled(Container)`
  background-color: ${(props) => props.theme.color.backgroundSkillsStack};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const ContainerSkillsStackItem = styled(Container)`
  background-color: ${(props) => props.theme.color.backgroundSkillsStack};
`;

export const ContainerHome = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 550px 0px 550px;
  }

  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 100px 200px 0px 200px;
  }

  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 180px 0px 180px;
  }

  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 0px 150px;
    grid-template-rows: 400px 1fr;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 0px 100px;
    grid-template-rows: 300px 1fr;
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 0px 30px;
    grid-template-rows: 250px 1fr;
  }
`;
