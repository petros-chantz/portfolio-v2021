import React from "react";
import { ExpertiseBlockSkillsBoxWrapper } from "./ExpertiseBlockSkillsBoxStyling";

export default function ExpertiseBlockSkillsBox(props) {
    const { skills } = props;
    return (
        <ExpertiseBlockSkillsBoxWrapper>
            <p className="skills">{skills.skills.skill1}</p>
            <p className="skills">{skills.skills.skill2}</p>
            <p className="skills">{skills.skills.skill3}</p>
            <p className="skills">{skills.skills.skill4}</p>
            <p className="skills">{skills.skills.skill5}</p>
            <p className="skills">{skills.skills.skill6}</p>
        </ExpertiseBlockSkillsBoxWrapper>
    );
}