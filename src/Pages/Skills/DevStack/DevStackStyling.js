import styled from "styled-components";


export const DevStackWrapper = styled.div`
    margin-top: 50px;
    display:grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2,1fr);
        margin-top: 5px;

    }
`;

export const DevStackTitle = styled.div`
    display: grid;
    place-items: center;

    .devStack-title{
        font-size: 18px;
        font-weight: 400;
        margin:0;
    }

`;

export const DevStackPicturesBlock = styled.div`
    display: grid;
    margin-right: 150px;
    place-items: center;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (max-width: 1100px){
        margin-right: 100px;
        grid-gap: 10px;

    }
    @media screen and (max-width: 800px){
        margin-right: 50px;
    }
    @media screen and (max-width: 500px){
        margin-right: 0px;
    }
    @media screen and (max-width: 330px){
        grid-gap: 5px;
    }
`;

export const PictureBlockWrapper = styled.div`
    display: grid;
    place-items: center;

    p{
        margin:0;
    }

`;