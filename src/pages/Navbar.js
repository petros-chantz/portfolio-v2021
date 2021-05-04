import React from "react";
import { Container, Padding } from "../components/Container";
import NavbarLink from "../components/Navbar/NavbarLink";
import { TextRegular } from "../components/Text";
import { Button } from "../components/Button";

export default function Navbar(props) {
  return (
    <Padding columns="repeat(2, 1fr)" id="top">
      <Container place="center start">
        <Button onClick={props.handleThemeChange}>
          {props.colorTheme ? (
            <TextRegular>lights off please</TextRegular>
          ) : (
            <TextRegular>lights on please</TextRegular>
          )}
        </Button>
      </Container>
      <Container place="center end" gap="5px">
        <NavbarLink HashLink="/#skills" HashLinkName="skills" />
        <NavbarLink HashLink="/#experience" HashLinkName="experience" />
        <NavbarLink HashLink="/#projects" HashLinkName="projects" />
      </Container>
    </Padding>
  );
}
