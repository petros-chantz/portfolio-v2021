import React from "react";
import styled from "styled-components";
import PageDescription from "./../../../Page/Description/PageDescription";

const ParagraphWrapper = styled.div`

`;

const ProjectDescription = styled.p`
    font-size: 16px;
    margin:0;
    text-align: justify;
    font-weight: 500;
`;

export default function Paragraph(props) {
    const { project } = props;
    return (
        <ParagraphWrapper>
            <ProjectDescription>{project.description}</ProjectDescription>
        </ParagraphWrapper>
    );
}