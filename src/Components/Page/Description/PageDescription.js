import React from "react";
import { PageDescriptionWrapper } from "./PageDescriptionStyling";

export default function PageDescription(props) {
    return (
        <PageDescriptionWrapper>
            <p className="page-description-text">{props.pageDescription}</p>
        </PageDescriptionWrapper>
    );
}