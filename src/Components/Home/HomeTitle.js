import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const TitleWrapper = styled.div`
    height: 100%;
    display: grid;
    place-items: center;

    .title{
        margin: 0;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 1px;
    }


    .body-title-link{
        color: black;
        :hover{
            color: #007bff;
        }
    }

    @media screen and (max-width: 500px){
            .title{
                font-size: 50px !important;
            }
`;

export default function HomeTitle(){

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 }
      });

    return(
        <TitleWrapper>
            <animated.h1 style={props} className="title">Hey there, 
            <a  href="https://www.linkedin.com/in/petroschantz/" 
                target="_blank" rel="noopener noreferrer" 
                className="body-title-link"> Petros</a> here!
            </animated.h1>
        </TitleWrapper>
    );
}