import React from "react";
import { Container } from "../Components/Containers";
import { Title, Text } from "../Components/TextElements";

export default function Skills() {
    return (
        <Container padding="20px 200px 0px 200px" rows="50px 100px 1fr 100px" gap="20px">
            <Container>
                <Title fontSize="40px">Skills</Title>
            </Container>
            <Container >
                <Text fontSize="18px" fontWeight="300" textAlign="justify" lineHeight="25px">I’m a person who wears a lot of hats. As my practise is
                multi phased and interdisciplinary my skill sets and expertises coincidentally reflect that breadth
                and variety. Above all I am a strong believer in the practise of self-directed and continuous
                learning and the ability to self reflect before action taking. These beliefs have been formed in my
                practise from my own appreciation of craftsmanship alongside the craftsmanship of people that
                I have had the chance to work with.</Text>
            </Container>
            <Container columns="repeat(3, 1fr)" place="center">
                <Container><Text>Columns</Text></Container>
                <Container><Text>Columns</Text></Container>
                <Container><Text>Columns</Text></Container>
            </Container>
            <Container columns="repeat(2, 1fr)" place="center">
                <Container><Text>my dev stack</Text></Container>
                <Container columns="repeat(5,1fr)" gap="10px">
                    <Container></Container>
                    <Container></Container>
                    <Container></Container>
                    <Container></Container>
                    <Container></Container>
                </Container>
            </Container>
        </Container>
    );
}