import styled from "styled-components";

export const DevStackWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr;
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