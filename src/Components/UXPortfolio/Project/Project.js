import React from "react";
import styled from "styled-components";
import ProjectContent from "./ProjectContent";
import ProjectPhoto from "./ProjectPhoto";

const ProjectWrapper =styled.div`
    border-radius: 5px;
    color: white;
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    color: black;

`;

export default function Project(props){
    const {projects} = props;
    return(
       <ProjectWrapper>
           <ProjectPhoto project={projects}/>
            <ProjectContent project={projects}/>
       </ProjectWrapper>
    );
}