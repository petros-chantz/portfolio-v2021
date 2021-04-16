import React from "react";
import { ExperienceItemWrapper, ItemNumberWrapper, ItemTextWrapper } from "./ExperienceItemStyling";

export default function ExperienceItem(props) {
    return (
        <ExperienceItemWrapper >
            <ItemNumberWrapper>
                <p className="number">{props.number}</p>
            </ItemNumberWrapper>
            <ItemTextWrapper>
                <p className="text">{props.text}</p>
            </ItemTextWrapper>
        </ExperienceItemWrapper>
    );
}
