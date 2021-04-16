import React from "react";
import styled from "styled-components";


const SubtitleWrapper = styled.div`
    display: grid;
    place-items: center end;

    .subtitle{
        margin:0;
        font-size: 18px;
        font-weight: 300;
    }
`;

export default function Subtitle(props) {
    const { projects } = props;
    return (
        <SubtitleWrapper>
            <p className="subtitle">{projects.projectSubtitle}</p>
        </SubtitleWrapper>
    );
}