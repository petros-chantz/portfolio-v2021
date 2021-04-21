import React from "react"
import { ExpertisesWrapper } from "./ExpertisesStyling";
import skills from "./../../Data/skills.json";
import ExpertiseBlock from "./ExpertiseBlock/ExpertiseBlock";

export default function Expertises(props) {
    return (
        <ExpertisesWrapper>
            {Object.keys(skills).map((id) => {
                return (<>
                    <ExpertiseBlock skills={skills[id]}/>
                </>);
            })}
        </ExpertisesWrapper>
    );
}
