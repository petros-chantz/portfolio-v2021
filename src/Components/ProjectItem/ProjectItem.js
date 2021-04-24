import React from "react";
import { Container } from "../Containers";
import { Link, Title, Text } from "../TextElements";
import ProjectKeywordItem from "./ProjectKeywordItem";
import ProjectLinkItem from "./ProjectLinkItem";

export default function ProjectItem(props) {
    return (
        <Container columns="repeat(2,1fr)" gap="50px">
            <Container place="center">
                <Text>photo</Text>
            </Container>
            <Container rows="50px 50px 50px 50px">
                <Container columns="1fr 1fr" >
                    <Title textAlign="left">Project title</Title>
                    <Text textAlign="right">Subtitle</Text>
                </Container>
                <Text>A self-contained, network connected tangible sleep quality measuring device for sleep research at the home setting.</Text>
                <Container  columns="repeat(4,1fr)" place="center start" padding="0px 250px 0px 0px">
                    <ProjectKeywordItem />
                    <ProjectKeywordItem />
                    <ProjectKeywordItem />
                    <ProjectKeywordItem />
                </Container>
                <Container place="center" columns="repeat(3,1fr)" margin="20px 0px 0px 0px">
                    <ProjectLinkItem />
                    <ProjectLinkItem />
                    <ProjectLinkItem/>
                </Container>
            </Container>
        </Container>
    );
}