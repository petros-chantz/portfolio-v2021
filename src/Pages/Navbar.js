import React from "react";
import { Container } from "../Components/Containers";
import { Text } from "./../Components/TextElements";
import { Button } from "./../Components/Button";
import NavbarLink from "../Components/NavbarLink";

export default function Navbar(props) {
  return (
    <Container columns="repeat(2, 1fr)" padding={props.padding}>
      <Container place="center start">
        <Button onClick={props.handleThemeChange}>
          {props.colorTheme ? (
            <Text>lights off please</Text>
          ) : (
            <Text>lights on please</Text>
          )}
        </Button>
      </Container>
      <Container place="center end" gap="10px;">
        <NavbarLink HashLink="skills" navBarfontSize={props.navBarfontSize} />
        <NavbarLink
          HashLink="experience"
          navBarfontSize={props.navBarfontSize}
        />
        <NavbarLink HashLink="projects" navBarfontSize={props.navBarfontSize} />
      </Container>
    </Container>
  );
}
