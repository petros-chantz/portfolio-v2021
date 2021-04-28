import React from "react";
import { Container, ContainerNavbar } from "../Components/Containers";
import { Text } from "./../Components/TextElements";
import { Button } from "./../Components/Button";
import NavbarLink from "../Components/NavbarLink";

export default function Navbar(props) {
  return (
    <ContainerNavbar columns="repeat(2, 1fr)">
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
        <NavbarLink HashLink="/#skills" HashLinkName="Skills" />
        <NavbarLink HashLink="/#experience" HashLinkName="Experience" />
        <NavbarLink HashLink="/#projects" HashLinkName="Projects" />
      </Container>
    </ContainerNavbar>
  );
}
