import React from "react";
import { Container } from "./Containers";
import { Title, Text, Link } from "./TextElements";

export default function HomeTextContent() {
  return (
    <Container rows="250px 1fr 50px" gap="50px">
      <Title fontSize="96px" textAlign="left">
        Hey there, Petros here!
      </Title>
      <Container rows="50px 1fr 50px" gap="5px" place="center start">
        <Text textAlign="justify">
          I’m a UX Researcher and an all-around Creative Technologist.
        </Text>
        <Text textAlign="justify">
          I hold a Master's Degree in Constructive Design Research from
          Technical University of Eindhoven. I take a hands-on approach to
          research with emphasis on the use of data as a design material. I’m
          using React.js and other frontend libraries and frameworks to explore
          new ways to design rich meaningful interactions and visualise
          information.
        </Text>

        <Text textAlign="justify">
          I’m ready to take the next step and join your team!
        </Text>
      </Container>
      <Container columns="repeat(4, 1fr)" place="center">
        <Text>email</Text>
        <Link>cv</Link>
        <Link>linkedIn</Link>
        <Link>github</Link>
      </Container>
    </Container>
  );
}
