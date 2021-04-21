import styled from "styled-components";

export const ProjectsWrapper = styled.div`
    margin: 20px 200px 20px 200px;
    display: grid;
    grid-template-rows: 50px 100px 1fr 100px;
    grid-gap: 40px;

    @media screen and (max-width: 1100px){
       grid-template-rows: 50px 100px 1fr 100px;
    }

    @media screen and (max-width: 800px){
        margin: 50px 100px 50px 100px;
    }

    @media screen and (max-width: 500px){
        margin: 50px 50px 20px 50px;
        grid-template-columns: 325px;
        grid-template-rows: 50px 200px 1fr 100px;
    }

    @media screen and (max-width: 400px){
        margin: 50px 25px 20px 25px;
        
    }

    @media screen and (max-width: 330px){
        grid-template-columns: 270px;
        grid-template-rows: 50px 250px 1fr 100px;
    }
`;

export const ProjectWrapper = styled.div`
    display: grid;  
    grid-gap: 60px;
`;

export const TopWrapper = styled.div`
    display: grid;
    place-items: center end;
`;

export const Top = styled.p`
        margin:0;
        font-size: 24px;
        font-weight: 700;
        color: #0C60BB;
`;