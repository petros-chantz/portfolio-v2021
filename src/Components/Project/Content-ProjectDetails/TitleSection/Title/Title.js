import React from "react";
import styled from "styled-components";


const TitleWrapper = styled.div`
    display: grid;
    place-items: center start;

    .title{
        margin:0;
        font-size: 24px;
        font-weight: 700;

        @media screen and (max-width: 320px){
            font-size: 20px;
        }
    }
`;

export default function Title(props) {
    const { project } = props;
    return (
        <TitleWrapper>
            <h5 className="title">{project.title}</h5>
        </TitleWrapper>
    );
}