import React from "react";
import Link from "./../../Link/Link";
import styled from "styled-components";
import Keyword from "./Keyword/Keyword";
import Paragraph from "./Paragraph/Paragraph";
import TitleSection from "./TitleSection/TitleSection";

const ContentDetailsWrapper = styled.div`
    display: grid;
    grid-template-rows: 50px 80px 30px 50px;
    grid-gap: 10px;
    margin: 10px 80px 10px 10px;

    @media screen and (max-width: 1100px){
      margin: 10px;
    }

        
    @media screen and (max-width: 500px){
      grid-template-rows: 70px 120px 50px 50px;
    }
`;

const LinksWrapper = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
`;

export default function ContentDetails(props) {
    const { project } = props;
    return (
        <ContentDetailsWrapper>
            <TitleSection project={project} />
            <Paragraph project={project} />
            <Keyword project={project} />
            <LinksWrapper>
                <Link linkDescription="link"/>
                <Link linkDescription="link" />
                <Link linkDescription="link"/>
            </LinksWrapper>
        </ContentDetailsWrapper>
    );
}