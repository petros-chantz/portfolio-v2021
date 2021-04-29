import React from "react";
import {
  Container,
  ContainerSkillsStackItem,
  ContainerSkillsStack,
} from "../Container";
import { Text } from "../Text";
import Figma from "./../../images/Figma-Icon.svg";
import Storybook from "./../../images/storybook.png";
import ReactLogo from "./../../images/react-logo.png";
import AWS from "./../../images/aws-logo.png";
import StyledComponents from "./../../images/styled-components.svg";

export default function SkillsStack() {
  return (
    <Container gap="50px">
      <Container place="center">
        <Text>my current dev stack</Text>
      </Container>
      <ContainerSkillsStack columns="repeat(5,1fr)" padding="20px">
        <ContainerSkillsStackItem padding="10px" place="center">
          <img src={Figma} alt="figma" height="40" />
        </ContainerSkillsStackItem>
        <ContainerSkillsStackItem padding="10px" place="center">
          <img src={Storybook} alt="Storybook" height="40" />
        </ContainerSkillsStackItem>
        <ContainerSkillsStackItem padding="10px" place="center">
          <img src={StyledComponents} alt="StyledComponents" height="40" />
        </ContainerSkillsStackItem>
        <ContainerSkillsStackItem padding="10px" place="center">
          <img src={ReactLogo} alt="ReactLogo" height="40" />
        </ContainerSkillsStackItem>
        <ContainerSkillsStackItem padding="10px" place="center">
          <img src={AWS} alt="AWS" height="40" />
        </ContainerSkillsStackItem>
      </ContainerSkillsStack>
    </Container>
  );
}
