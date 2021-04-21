import React from "react";
import styled from "styled-components";
import Subtitle from "./Subtitle/Subtitle";
import Title from "./Title/Title";


const TitleSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`;

export default function TitleSection(props) {
    const { project } = props;
    return (
        <TitleSectionWrapper>
            <Title project={project}/>
            <Subtitle project={project}/>
        </TitleSectionWrapper>
    );
}