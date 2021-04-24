import React from "react";
import { Container } from "../Containers";
import { Text } from "../TextElements";

export default function ProjectKeywordItem(props) {
    const { project } = props;
    return (
        <Container place="center">
            <Text fontSize="12px">keyword</Text>
        </Container>
    );
}