import React from "react";
import { Container } from "../Components/Containers";
import { Title, Text } from "../Components/TextElements";

export default function Experience() {
    return (
        <Container padding="20px 200px 0px 200px" rows="50px 100px 1fr" gap="20px">
            <Container>
                <Title fontSize="40px">Experience</Title>
            </Container>
            <Container>
                <Text fontSize="18px" fontWeight="300" textAlign="justify" lineHeight="25px">As my skills are multi-phased,
                so is my professional experience. In the past four years I have had the chance to work in multiple academic
                research projects as a research assistant, in design research labs as a lab assistant and in commercial
                  projects for companies and freelancers such as Signify (Ex. Philips Lighting).</Text>
            </Container>
            <Container columns="repeat(5,1fr)" place="center">
                <Container><Text>Experience Years</Text></Container>
                <Container><Text>Experience Years</Text></Container>
                <Container><Text>Experience Years</Text></Container>
                <Container><Text>Experience Years</Text></Container>
                <Container><Text>Experience Years</Text></Container>
            </Container>
        </Container>
    );
}