import React from "react";
import { ExpertiseBlockTitleWrapper } from "./ExpertiseBlockTitleStyling";

export default function ExpertiseBlockTitle(props) {
    const { skills } = props;
    return (
        <ExpertiseBlockTitleWrapper>
             <p className="title">{skills.expertiseName}</p>
        </ExpertiseBlockTitleWrapper>
    );
}