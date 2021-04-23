import React from "react";
import { Container } from "../Components/Containers";
import { Text } from "../Components/TextElements";

export default function Footer() {
    return (
        <Container padding="20px 200px 30px 200px" columns="repeat(2, 1fr)">
            <Container place="center start">
                <Text>Petros Chantzopoulos - April 2021</Text>
            </Container>
             <Container place="center end">
                 <Text>Made with love, React, styled-components, AWS and a lot of coffee!</Text>
            </Container>
        </Container>
    );
}