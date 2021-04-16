import React from "react";
import styled from "styled-components";


const TitleWrapper = styled.div`
    display: grid;
    place-items: center start;

    .title{
        margin:0;
        font-size: 24px;
        font-weight: 700;
    }
`;

export default function Title(props) {
    const { projects } = props;
    return (
        <TitleWrapper>
            <h5 className="title">{projects.projectTitle}</h5>
        </TitleWrapper>
    );
}