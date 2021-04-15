import React from "react"
import ExpertisesRow from "../ExpertiseRow/ExpertiseRow";
import { ExpertiseListWrapper} from "./ExpertiseListStyling";

export default function ExpertisesList() {
    return (
        <ExpertiseListWrapper>
            <ExpertisesRow />
            <ExpertisesRow />
            <ExpertisesRow />
        </ExpertiseListWrapper>
    );
}