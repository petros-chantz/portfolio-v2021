import React from "react";
import { Container, ContainerSkillsStack } from "../Components/Containers";
import PagesInfoSections from "../Components/PagesInfoSections";
import SkillsDevStackItem from "../Components/SkillsDevStackItem";
import SkillsFieldColumn from "../Components/SkillsFieldColumn";
import { Title, Text } from "../Components/TextElements";
import skills from "./../Data/skills.json";
import Figma from "./../Images/Figma-Icon.svg";
import Storybook from "./../Images/storybook.png";
import Reactlogo from "./../Images/react-logo.png";
import AWS from "./../Images/aws-logo.png";
import StyledComponents from "./../Images/styled-components.svg";

export default function Skills() {
    return (
        <Container padding="20px 200px 0px 200px" rows="150px 1fr 100px" gap="30px" id="skills">
            <PagesInfoSections pageTitle="Skills"
                pageText="I’m a person who wears a lot of hats. As my practise is multi phased and
                interdisciplinary my skill sets and expertises coincidentally reflect that breadth and variety.
                Above all I am a strong believer in the practise of self-directed and continuous learning and the
                ability to self reflect before action taking. These beliefs have been formed in my practise from my own
                appreciation of craftsmanship alongside the craftsmanship of people that I have had the chance to work with."/>
            <Container columns="repeat(3, 1fr)" place="center">
                {Object.keys(skills).map((id) => {
                    return (<>
                        <SkillsFieldColumn skills={skills[id]} key={skills[id]}/>
                    </>);
                })}
            </Container>
            <Container columns="repeat(2, 1fr)" place="center">
                <Text>my dev stack</Text>
                <ContainerSkillsStack columns="repeat(5, 1fr)" gap="10px" place="center" margin="0px 100px 0px 0px" padding="5px">
                    <SkillsDevStackItem image={Figma} imageHeight="40"></SkillsDevStackItem>
                    <SkillsDevStackItem image={Storybook} imageHeight="50"></SkillsDevStackItem>
                    <SkillsDevStackItem image={StyledComponents} imageHeight="50"></SkillsDevStackItem>
                    <SkillsDevStackItem image={Reactlogo} imageHeight="50"></SkillsDevStackItem>
                    <SkillsDevStackItem image={AWS} imageHeight="40"></SkillsDevStackItem>
                </ContainerSkillsStack>
            </Container>
        </Container>
    );
}