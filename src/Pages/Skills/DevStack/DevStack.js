import React from "react";
import { DevStackWrapper, DevStackTitle } from "./DevStackStyling";

export default function DevStack() {
    return (
        <DevStackWrapper>
            <DevStackTitle>
                <h5 className="devStack-title">My current Dev Stack</h5>
            </DevStackTitle>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </DevStackWrapper>
    );
}