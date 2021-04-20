import styled from "styled-components";

export const ExperienceWrapper = styled.div`
    margin: 50px 200px 100px 200px;
    display: grid;
    grid-gap: 30px;
    grid-template-row: 1fr 1fr 2fr;
    
    @media screen and (max-width: 800px){
        margin: 50px 100px 50px 100px;
    }

    @media screen and (max-width: 500px){
        margin: 50px 50px 50px 50px;
        grid-template-columns: 325px;
        grid-template-row: 1fr 1fr 2fr;
    }
    @media screen and (max-width: 400px){
        margin: 50px 25px 50px 25px;
    }
    @media screen and (max-width: 330px){
        grid-template-columns: 270px;
    }
`;