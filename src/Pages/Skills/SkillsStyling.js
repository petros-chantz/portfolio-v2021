import styled from "styled-components";

export const SkillsWrapper = styled.div`
    margin: 20px 100px 100px 100px;
    display: grid;
    grid-template-rows: 50px 100px 1fr 100px;
    grid-gap: 40px;

    @media screen and (max-width: 500px){
        margin: 20px 50px 20px 50px;
        grid-template-rows: 50px 200px 1fr 100px;
    }

    @media screen and (max-width: 400px){
        margin: 20px 25px 20px 25px;
    }

    @media screen and (max-width: 330px){
        grid-template-rows: 50px 250px 1fr 100px;
    }
`;