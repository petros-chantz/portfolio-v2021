import React from "react"
import { PageTitleWrapper } from "./PageTitleStyling";

export default function PageTitle(props) {
    return (
        <PageTitleWrapper>
            <h3 className="page-title">{props.PageTitle}</h3>
        </PageTitleWrapper>
    );
}