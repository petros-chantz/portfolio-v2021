import React from "react"
import ExpertisesList from "./ExpertiseList/ExpertiseList";
import { ExpertisesWrapper } from "./ExpertisesStyling";
import ExpertisesTitle from "./ExpertisesTitle/ExpertisesTitle";

export default function Expertises(props) {
    return (
        <ExpertisesWrapper>
            <ExpertisesTitle expertiseTitle={props.expertiseTitle} />
            <ExpertisesList/>
        </ExpertisesWrapper>
    );
}
