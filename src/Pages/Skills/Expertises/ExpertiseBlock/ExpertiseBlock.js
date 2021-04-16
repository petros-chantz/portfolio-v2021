import React from "react";
import ExpertiseBlockSkillsBox from "./ExpertiseBlockSkillsBox/ExpertiseBlockSkillsBox";
import { ExpertiseBlockWrapper } from "./ExpertiseBlockStyling";
import ExpertiseBlockTitle from "./ExpertiseBlockTitle/ExpertiseBlockTitle";

export default function ExpertiseBlock(props) {
    const { skills } = props;
    return (
        <ExpertiseBlockWrapper>
            <ExpertiseBlockTitle skills={skills}/>
            <ExpertiseBlockSkillsBox skills={skills}/>
        </ExpertiseBlockWrapper>
    );
}