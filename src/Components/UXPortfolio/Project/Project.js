import React from "react";
import ProjectContent from "./ProjectContent";
import ProjectPhoto from "./ProjectPhoto";
import {ProjectWrapper} from "./ProjextStyling";

export default function Project(props){
    const {projects} = props;
    return(
       <ProjectWrapper>
           <ProjectPhoto project={projects}/>
            <ProjectContent project={projects}/>
       </ProjectWrapper>
    );
}