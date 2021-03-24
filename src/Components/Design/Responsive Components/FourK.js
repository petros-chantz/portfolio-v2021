import React from "react";
import { HashLink } from "react-router-hash-link";
import Project from "../Project/Project";
import {FourKWrapper} from "../DesignStylingTotal";
import {FourKScreen} from "../../Responsive";

export default function FourK(props){
    const { projects } = props;
    return(
    <FourKScreen>           
        <FourKWrapper id="design-portfolio">
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
        </FourKWrapper>
    </FourKScreen> 
    )
}