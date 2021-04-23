import React from "react";
import { Container } from "../Components/Containers";
import { Title, Text } from "../Components/TextElements";

export default function Projects() {
    return (
        <Container padding="20px 200px 0px 200px" rows="50px 40px 1fr 30px" gap="20px">
            <Container>
                <Title fontSize="40px">Projects</Title>
            </Container>
            <Container >
                <Text fontSize="18px" fontWeight="300" textAlign="justify" lineHeight="25px">Hereby is a selected list of various research, design and frontend development projects I have been working on in the past four years.</Text>
            </Container>
            <Container rows="repeat(5,1fr)" place="center" gap="20px">
                <Container><Text>Experience Years</Text></Container>
                <Container><Text>Experience Years</Text></Container>
                <Container><Text>Experience Years</Text></Container>
                <Container><Text>Experience Years</Text></Container>
                <Container><Text>Experience Years</Text></Container>
            </Container>
            <Container place="center end"><Text>Go to the top</Text></Container>
        </Container>
    );
}