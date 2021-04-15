import React from "react";
import { LinkWrapper } from "./LinkStyling";

export default function Link(props) {
    return (
        <LinkWrapper>
            <a href={props.linkUrl} target="_blank" rel="noopener noreferrer" className="link">{props.linkDescription}</a>
        </LinkWrapper>
    );
}