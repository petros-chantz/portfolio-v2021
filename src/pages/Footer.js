import React from "react";
import { Container } from "../components/Container";
import { TextRegular } from "../components/Text";
import styled from "styled-components";
import { breakpoints } from "./../helpers/Media";

const FooterLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.color.link};
`;

const PaddingFooter = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-columns: repeat(2, 1fr);
    grid-templete-rows: 1fr;
    padding: 100px 300px 50px 300px;
  }
  @media screen and (max-width: ${breakpoints.laptopMScreen}) {
    padding: 100px 200px 50px 200px;
  }
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    padding: 100px 150px 50px 150px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
    place-items: center;
    grid-gap: 20px;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    place-items: center;
    padding: 100px 100px 50px 100px;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    place-items: center;
    padding: 100px 30px 50px 30px;
  }
`;

export default function Footer() {
  return (
    <PaddingFooter>
      <Container place="center start">
        <TextRegular textAlign="center">
          Petros Chantzopoulos - April 2021 - v3.0.0
        </TextRegular>
      </Container>
      <Container place="center end">
        <TextRegular textAlign="center">
          Love what you see?{" "}
          <FooterLink
            href="https://www.linkedin.com/in/petroschantz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire me!
          </FooterLink>{" "}
          Or{" "}
          <FooterLink
            href="mailto: petros.chantz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email me!
          </FooterLink>
        </TextRegular>
      </Container>
    </PaddingFooter>
  );
}
