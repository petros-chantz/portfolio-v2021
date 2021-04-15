import React from "react"
import ExpertisesItem from "../ExpertisesItem/ExpertisesItem";
import { ExpertisesRowWrapper} from "./ExpertiseRowStyling";

export default function ExpertisesRow() {
    return (
        <ExpertisesRowWrapper>
            <ExpertisesItem />
            <ExpertisesItem />
            <ExpertisesItem />
            <ExpertisesItem />
            <ExpertisesItem />
            <ExpertisesItem/>
        </ExpertisesRowWrapper>
    );
}