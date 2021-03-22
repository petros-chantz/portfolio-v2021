import React from "react";
import { useSpring, animated } from "react-spring";
import {TitleWrapper} from "./HomeStyling"

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