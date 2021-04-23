import React from "react";
import { Text } from "../Components/TextElements";
import { Container } from "./../Components/Containers";

export default function Home() {
    return (
        <Container rows="1fr 100px" padding="20px 200px 0px 200px" >
            <Container columns="repeat(2, 1fr)" gap="20px">
                <Container place="center">
                    <Text>Photo</Text>
                </Container>
                <Container place="center start" >
                    <Container rows="100px 100px 1fr 100px">
                        <Text>Text</Text>
                        <Text>Text</Text>
                        <Text>Text</Text>
                        <Text>Text</Text>
                    </Container>
                </Container>
            </Container>
            <Container>
                <Container place="center start">
                    <Text>weather</Text>
                </Container>
            </Container>
        </Container>
    );
}