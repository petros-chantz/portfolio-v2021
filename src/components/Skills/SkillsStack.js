import React from "react";
import { Container, ContainerSkillsStackItem } from "../Container";
import { TextRegular } from "../Text";
import Figma from "../../images/Figma-Icon.svg";
import Storybook from "../../images/storybook.svg";
import ReactLogo from "../../images/react.svg";
import AWS from "../../images/aws.svg";
import StyledComponents from "../../images/styled-components.svg";

export default function SkillsStack() {
  return (
    <Container gap="10px">
      <Container place="center">
        <TextRegular fontWeight="500">My current dev stack:</TextRegular>
      </Container>
      <Container columns="repeat(5,1fr)" padding="20px" place="center">
        <ContainerSkillsStackItem padding="15px" place="center">
          <img src={Figma} alt="figma" height="50" title="Figma" />
        </ContainerSkillsStackItem>
        <ContainerSkillsStackItem padding="15px" place="center">
          <img src={Storybook} alt="Storybook" height="50" title="Storybook" />
        </ContainerSkillsStackItem>
        <ContainerSkillsStackItem padding="15px" place="center">
          <img
            src={StyledComponents}
            alt="StyledComponents"
            height="50"
            title="Styled-components"
          />
        </ContainerSkillsStackItem>
        <ContainerSkillsStackItem padding="15px" place="center">
          <img src={ReactLogo} alt="ReactLogo" height="50" title="React.js" />
        </ContainerSkillsStackItem>
        <ContainerSkillsStackItem
          padding="15px"
          margin="0px 0px 0px 10px"
          place="center"
        >
          <img src={AWS} alt="AWS" height="50" />
        </ContainerSkillsStackItem>
      </Container>
    </Container>
  );
}
