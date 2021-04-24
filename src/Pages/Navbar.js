import React from "react";
import { Container } from "../Components/Containers";
import { HashLink } from "react-router-hash-link";
import { Text } from "./../Components/TextElements";
import { Button } from "./../Components/Button";

export default function Navbar(props) {
    return (
        <Container columns="repeat(2, 1fr)" padding="20px 200px 0px 200px" >
            <Container place="center start" >
                <Button onClick={props.handleThemeChange}>
                    {props.colorTheme ? <Text>lights off please</Text> : <Text>lights on please</Text>}
                </Button>
            </Container>
            <Container place="center end" gap="10px;">
                <Container place="center">
                    <HashLink smooth to="/#skills" >
                        <Text fontSize="20px" fontWeight="300" transform="uppercase">Skills</Text>
                    </HashLink>
                </Container>
                <Container place="center">
                    <HashLink smooth to="/#experience" >
                        <Text fontSize="20px" fontWeight="300" transform="uppercase">Experience</Text>
                    </HashLink>
                </Container>
                <Container place="center">
                    <HashLink smooth to="/#projects" >
                        <Text fontSize="20px" fontWeight="300" transform="uppercase">Projects</Text>
                    </HashLink>
                </Container>
            </Container>
        </Container>
    );
}