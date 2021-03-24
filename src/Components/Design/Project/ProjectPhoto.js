import React from "react";
import {ProjectPhotoWrapper, ProjectPhotoBox} from "./ProjextStyling";

export default function ProjectPhoto(props){
    const {project} = props;
    return(
    <ProjectPhotoWrapper>
        <ProjectPhotoBox photoCover={project.photoCover}>
        </ProjectPhotoBox>
    </ProjectPhotoWrapper>
    );
}