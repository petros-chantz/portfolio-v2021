import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Me from "../../images/me-small.jpg";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 50,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ContainerPhoto = styled(animated.div)`
  height: 100%;
  display: grid;
  place-items: center;

  .card {
    width: 50ch;
    height: 50ch;
    background: black;
    border-radius: 5px;
    background-image: url(${Me});
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    border-radius: 50%;
    :hover {
      box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.6);
    }
  }
  @media screen and (max-width: 1500px) {
    .card {
      width: 45ch;
      height: 45ch;
    }
  }
  @media screen and (max-width: 1100px) {
    .card {
      width: 35ch;
      height: 35ch;
    }
  }
  @media screen and (max-width: 800px) {
    .card {
      width: 35ch;
      height: 35ch;
    }
  }
  @media screen and (max-width: 500px) {
    padding-top: 0 !important;
    .card {
      width: 20ch;
      height: 20ch;
    }
  }
`;

export default function HomePhoto() {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [props, set] = useSpring(() => ({
    xys: [1, 0, 1],
    config: { mass: 5, tension: 300, friction: 30 },
  }));
  return (
    <ContainerPhoto style={animation}>
      <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </ContainerPhoto>
  );
}
