import React from "react"
import { ExpertisesTitleWrapper } from "./ExpertisesTitleStyling";

export default function ExpertisesTitle(props) {
    return (
        <ExpertisesTitleWrapper>
            <p className="expertise-title">{props.expertiseTitle}</p>
        </ExpertisesTitleWrapper>
    );
}
