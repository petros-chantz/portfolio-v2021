import React from "react";
import { Container } from "../components/Container";
import NavbarLink from "../components/Navbar/NavbarLink";
import { Text } from "../components/Text";
import { Button } from "../components/Button";

export default function Navbar(props) {
  return (
    <Container columns="repeat(2, 1fr)" id="top">
      <Container place="center start">
        <Button onClick={props.handleThemeChange}>
          {props.colorTheme ? (
            <Text>lights off please</Text>
          ) : (
            <Text>lights on please</Text>
          )}
        </Button>
      </Container>
      <Container place="center end" gap="5px">
        <NavbarLink HashLink="/#skills" HashLinkName="skills" />
        <NavbarLink HashLink="/#experience" HashLinkName="experience" />
        <NavbarLink HashLink="/#projects" HashLinkName="projects" />
      </Container>
    </Container>
  );
}
