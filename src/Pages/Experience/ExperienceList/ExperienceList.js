import React from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import { ExperienceListWrapper } from "./ExperienceListStyling";

export default function ExperienceList() {
    return (
        <ExperienceListWrapper >
            <ExperienceItem number="5" text="research projects"/>
            <ExperienceItem number="3" text="commercial projects" />
            <ExperienceItem number="25+" text="stakeholder collaborations" />
             <ExperienceItem number="3+" text="years of experience"/>
        </ExperienceListWrapper>
    );
}