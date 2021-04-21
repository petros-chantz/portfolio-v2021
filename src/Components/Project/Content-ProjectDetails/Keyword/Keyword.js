import React from "react";
import styled from "styled-components";

const KeywordWrapper = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 500px){
      grid-gap: 5px;
    }
`;

const KeywordItem = styled.p`
    margin:0;
    font-size: 11px;
    text-align: right;
    font-weight: 400;


`;

export default function Keyword(props) {
    const { project } = props;
    return (
        <KeywordWrapper>
            <KeywordItem>{project.keywords.keyword1}</KeywordItem>
            <KeywordItem>{project.keywords.keyword2}</KeywordItem>
            <KeywordItem>{project.keywords.keyword3}</KeywordItem>
            <KeywordItem>{project.keywords.keyword4}</KeywordItem>
        </KeywordWrapper>
    );
}