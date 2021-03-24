import React from "react";
import { HashLink } from "react-router-hash-link";
import Project from "../Project/Project";
import {TabletWrapper} from "../DesignStylingTotal";
import {TabletScreen} from "../../Responsive";

export default function Tablet(props){
    const { projects } = props;
    return(
    <TabletScreen>           
        <TabletWrapper id="design-portfolio">
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
        </TabletWrapper>
    </TabletScreen> 
    )
}