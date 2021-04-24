import React from "react";
import { Container } from "./Containers";
import { Title, Text } from "./TextElements";

export default function PagesInfoSections(props) {
    return (
        <Container>
            <Container>
                <Title fontSize="40px">{props.pageTitle}</Title>
            </Container>
            <Container >
                <Text fontSize="18px" fontWeight="300" textAlign="justify" lineHeight="25px">{props.pageText}</Text>
            </Container>
        </Container>
    );
}