import React from "react";
import ProjectContentKeywords from "./ProjectContentKeywords";
import { ProjectContentWrapper } from "./ProjextStyling";
// import pdf from "./assets/pdf/Audio_Tales_Final_Report.pdf";

export default function ProjectContent(props){
    const {project} = props;
    return(
    <ProjectContentWrapper>
        <div className="content-title">
            <div className="title-box"><h3 className="title">{project.title}</h3></div>
            <div className="subtitle-box"><h6 className="subTitle">{project.projectType}</h6></div>
         </div>
        <div className="content-description"><p className="description">
            {project.description}
            </p>
        </div>
        <ProjectContentKeywords project={project}/>
            <div className="content-links">
           
            <a href={project.links.linkA.linkAddress} type="application/pdf" className="" target="_blank" rel="noopener noreferrer">{project.links.linkA.linkName}</a>
            <a href={project.links.linkB.linkAddress} className="" target="_blank" rel="noopener noreferrer">{project.links.linkB.linkName}</a>
        </div>
    </ProjectContentWrapper>
    );
}