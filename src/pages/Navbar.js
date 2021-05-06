import React from "react";
import { Container } from "../components/Container";
import NavbarLink from "../components/Navbar/NavbarLink";
import { TextRegular } from "../components/Text";
import { Button } from "../components/Button";
import styled from "styled-components";
import { breakpoints } from "./../helpers/Media";

const NavbarContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    padding: 100px 300px 50px 300px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 200px 50px 200px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 50px 150px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    padding: 100px 100px 50px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 100px 30px 50px 30px;
  }
`;

export default function Navbar(props) {
  return (
    <NavbarContainer columns="repeat(2, 1fr)">
      <Container place="center start">
        <Button onClick={props.handleThemeChange} aria-label="theme change">
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
    </NavbarContainer>
  );
}
