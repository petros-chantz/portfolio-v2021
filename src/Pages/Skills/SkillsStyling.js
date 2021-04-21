import styled from "styled-components";
import { animated } from "react-spring";

export const SkillsWrapper = styled(animated.div)`
    margin: 50px 200px 100px 200px;
    display: grid;
    grid-template-rows: 50px 120px 1fr 100px;
    grid-gap: 40px;

    @media screen and (max-width: 1100px){
        grid-template-rows: 50px 200px 1fr 100px;
    }

    @media screen and (max-width: 800px){
        margin: 50px 100px 50px 100px;
        grid-template-rows: 50px 220px 1fr 100px;
    }

    @media screen and (max-width: 500px){
        margin: 50px 50px 20px 50px;
        grid-template-rows: 50px 400px 1fr 200px;
        grid-template-columns: 325px;
    }

    @media screen and (max-width: 400px){
        margin: 50px 25px 20px 25px;
        
    }

    @media screen and (max-width: 330px){
        grid-template-rows: 50px 500px 1fr 200px;
        grid-template-columns: 270px;
    }
`;