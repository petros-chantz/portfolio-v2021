import React from "react";
import { Text } from "../Components/TextElements";
import { Container } from "./../Components/Containers";
import Weather from "./../api/Weather";
import HomeText from "../Components/HomeTextContent.js";

export default function Home() {
    return (
        <Container rows="1fr 100px" padding="20px 200px 0px 200px" >
            <Container columns="repeat(2, 1fr)" gap="20px">
                <Container place="center">
                    <Text>Photo</Text>
                </Container>
                <Container place="center start" >
                    <HomeText/>
                </Container>
            </Container>
            <Container>
                <Weather/>
            </Container>
        </Container>
    );
}