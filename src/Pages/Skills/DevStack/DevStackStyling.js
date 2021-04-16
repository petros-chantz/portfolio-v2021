import styled from "styled-components";


export const DevStackWrapper = styled.div`
    margin-top: 50px;
    display:grid;
    grid-template-columns: 1fr 2fr;
`;

export const DevStackTitle = styled.div`
    display: grid;
    place-items: center end;

    .devStack-title{
        font-size: 18px;
        font-weight: 400;
        margin:0;
    }
`;

export const DevStackPicturesBlock = styled.div`
    margin-right: 200px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

export const PictureBlockWrapper = styled.div`
    display: grid;
    place-items: center;

    p{
        margin:0;
    }

`;