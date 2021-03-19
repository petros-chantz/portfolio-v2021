import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 50, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const HomeContentPhotoWrapper = styled.div`
    height: 100%;
    display: grid;
    place-items: center;
    padding-top: 40px;

    .card {
        width: 30ch;
        height: 30ch;
        background: black;
        border-radius: 5px;
        background-image: url('/me.JPG');
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

    @media screen and (max-width: 800px){
       .card{
        width: 25ch;
        height: 25ch;
       }
        
    }

    @media screen and (max-width: 500px){
            padding-top: 0 !important;

            .card{
                width: 20ch;
            height: 20ch;
            }
    }
`;

export default function HomeContentPhoto(){
    const [props, set] = useSpring(() => ({ xys: [1, 0, 1], config: { mass: 5, tension: 300, friction: 30 } }))
    return(
        <HomeContentPhotoWrapper>
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            />
        </HomeContentPhotoWrapper>
    );
}