import React from "react";
import styled from "styled-components";
import ProjectContentKeywords from "./ProjectContentKeywords";

const ProjectContentWrapper =styled.div`
    height: 100%;
    padding: 10px;
    display: grid;
    grid-template-rows: 1fr 2fr 50px 1fr;
    grid-gap: 10px;

    .content-title{
        display: grid;
        grid-template-columns: 2fr 1fr;

        .title-box{
            display: grid;
            place-items: center start;
            .title{
                font-weight: 700;
                letter-spacing: 1px;
            }
        }
        .subtitle-box{
            display: grid;
            place-items: center end;
            .subTitle{
                font-weight: 400;
                
            }
        }
    }

    .content-description{
        .description{
            font-size: 20px;
            text-align: justify;
        }
    }

    .content-links{
        height:100%;
        width:100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
    }
`;
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
            <a href={project.links.linkA.linkAddress} className="" target="_blank" rel="noopener noreferrer">{project.links.linkA.linkName}</a>
            <a href={project.links.linkB.linkAddress} className="" target="_blank" rel="noopener noreferrer">{project.links.linkB.linkName}</a>
        </div>
    </ProjectContentWrapper>
    );
}