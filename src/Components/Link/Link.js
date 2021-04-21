import React from "react";
import styled from "styled-components";

const LinkWrapper = styled.div`
    display: grid;
    place-items: center;

    .link{
        color: #0C60BB;
        font-size: ${props => props.linkFontSize}px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-align: center;

 
    }
`;

export default function Link(props) {
    return (
        <LinkWrapper linkFontSize={props.linkFontSize} linkFontWeight={props.linkFontWeight}>
            <a href={props.linkUrl} target="_blank" rel="noopener noreferrer" className="link">{props.linkDescription}</a>
        </LinkWrapper>
    );
}