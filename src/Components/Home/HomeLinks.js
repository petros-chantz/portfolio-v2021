import React from "react";
import { useSpring, animated } from "react-spring";
import {HomeLinksWrapper} from "./HomeStyling";

export default function HomeLinks(){
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 }
    });

    return(
        <HomeLinksWrapper>     
            <div><animated.p style={props} className="link-text links">petros.chantz [at] gmail [dot] com</animated.p></div>
            <div><animated.a style={props} href="./assets/pdf/Petros-Chantzopoulos-CV.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" className="links">cv</animated.a></div>
            <div><animated.a style={props} href="https://www.linkedin.com/in/petroschantz/" target="_blank" rel="noopener noreferrer" className="links">linkedIn</animated.a></div>
            <div><animated.a style={props} href="https://github.com/petros-chantz" target="_blank" rel="noopener noreferrer" className="links">github</animated.a></div> 
        </HomeLinksWrapper>
    );
}