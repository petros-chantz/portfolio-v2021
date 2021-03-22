import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const HomeLinksWrapper = styled.div`
    height: 100%;
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;

    .link-text{
        margin:0;
         text-align: justify;
    }

    .links{
        font-size: 17px;
    }

    @media screen and (max-width: 800px){
            padding-top: 40px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);

            .link-text{
                font-size: 12px;
            }
    }

    @media screen and (max-width: 500px){
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: 1fr !important;
            place-items: start !important;
            padding-bottom: 20px;
            
            link-text{
                font-size: 15px;
            }
    }
`;

export default function HomeLinks(){
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 }
    });

    return(
        <HomeLinksWrapper>     
            <div><animated.p style={props} className="link-text links">petros.chantz [at] gmail [dot] com</animated.p></div>
            <div><animated.a style={props} href="https://www.dropbox.com/s/nwqsbf8jngvaun9/Petros-Chantzopoulos.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="links">cv</animated.a></div>
            <div><animated.a style={props} href="https://www.linkedin.com/in/petroschantz/" target="_blank" rel="noopener noreferrer" className="links">linkedIn</animated.a></div>
            <div><animated.a style={props} href="https://github.com/petros-chantz" target="_blank" rel="noopener noreferrer" className="links">github</animated.a></div> 
        </HomeLinksWrapper>
    );
}