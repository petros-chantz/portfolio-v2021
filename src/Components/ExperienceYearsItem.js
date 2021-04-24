import React from "react";
import { Container } from "./Containers";
import { Text } from "./TextElements";

export default function ExperienceYearsItem(propss) {
    return (
        <Container rows="1fr 50px">
            <Text textAlign="center" fontSize="98px"fontWeight="700">{propss.number}</Text>
            <Text textAlign="center" fontWeight="600">{propss.field}</Text>
        </Container>
    );
}