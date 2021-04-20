import React from "react";
import styled from "styled-components";

const LinkWrapper = styled.div`
    display: grid;
    place-items: center;

    .link{
        color: #0C60BB;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }
`;

export default function Link(props) {
    return (
        <LinkWrapper>
            <a href={props.linkUrl} target="_blank" rel="noopener noreferrer" className="link">{props.linkDescription}</a>
        </LinkWrapper>
    );
}