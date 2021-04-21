import React from "react";
import styled from "styled-components";


const SubtitleWrapper = styled.div`
    display: grid;
    place-items: center end;

    .subtitle{
        margin:0;
        font-size: 18px;
        font-weight: 300;
        text-align: right;

        @media screen and (max-width: 320px){
            font-size: 14px;
            
        }
    }
`;

export default function Subtitle(props) {
    const { project } = props;
    return (
        <SubtitleWrapper>
            <p className="subtitle">{project.projectType}</p>
        </SubtitleWrapper>
    );
}