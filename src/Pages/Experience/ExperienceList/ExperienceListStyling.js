import styled from "styled-components";

export const ExperienceListWrapper = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 1100px){
        grid-gap: 15px;
    }
    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
    }
`;