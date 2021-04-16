import styled from "styled-components";

export const ExperienceItemWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 50px;

    width: 100%;
`;

export const ItemNumberWrapper = styled.div`
    display: grid;
    place-items: center center;

    .number{
        margin: 0;
        font-size: 98px;
        font-weight: 700;
    }
`;

export const ItemTextWrapper = styled.div`
    display: grid;
    place-items: center;

    .text{
        margin:0;
        font-size: 18px;
        font-weight: 700;
    }
`;