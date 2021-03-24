import React from "react";
import { HashLink } from "react-router-hash-link";
import Project from "../Project/Project";
import {MobileMWrapper} from "../DesignStylingTotal";
import {MobileMScreen} from "../../Responsive";

export default function MobileM(props){
    const { projects } = props;
    return(
    <MobileMScreen>           
        <MobileMWrapper id="design-portfolio">
        <div className="body">
                <div className="body-title">
                    <h3 className="title">Design Projects - Selected Work</h3>
                </div>
                <div className="body-content">
                    {Object.keys(projects).map((id) => {
                        return (
                            <Project projects={projects[id]}/>
                        );
                    })}
                </div>
                <div className="body-btn">
                <HashLink smooth to="/#top">
                    <h3 className="btn">Back to the Top</h3>
                </HashLink>
                </div>
            </div>
        </MobileMWrapper>
    </MobileMScreen> 
    )
}