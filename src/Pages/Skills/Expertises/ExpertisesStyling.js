import styled from "styled-components";

export const ExpertisesWrapper = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    @media screen and (max-width: 800px){
        grid-gap: 30px;
        padding-left: 0px;
    }

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3,1fr);
        place-items: center start;
    }
    
`;