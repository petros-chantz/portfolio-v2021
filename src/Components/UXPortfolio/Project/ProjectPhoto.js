import React from "react";
import styled from "styled-components";

const ProjectPhotoWrapper = styled.div`
    padding: 10px;
    display: grid;
    place-items: center;
`;

const ProjectPhotoBox = styled.div`
    height: 70%;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 10px 30px -5px rgba(0, 123, 255, 0.5);
    background-image: url(${props => props.photoCover});
    background-size: cover;
    background-position: center center;

`;
export default function ProjectPhoto(props){
    const {project} = props;
    return(
    <ProjectPhotoWrapper>
        <ProjectPhotoBox photoCover={project.photoCover}>
        </ProjectPhotoBox>
    </ProjectPhotoWrapper>
    );
}