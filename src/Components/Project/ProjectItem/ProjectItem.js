import React from "react";
import styled from "styled-components";
import ContentDetails from "../Content-ProjectDetails/ContentDetails";
import Photo from "./../Content-Photo/Photo";

const ProjectItemWrapper = styled.div`
    // background-color: lightblue;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    @media screen and (max-width: 1100px){
       grid-template-rows: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px){
      grid-template-columns: 325px;
    }

    @media screen and (max-width: 320px){
      grid-template-columns: 270px;
    }
    
`;

export default function ProjectItem(props) {
    const { project } = props;
    return (
        <ProjectItemWrapper>
            <Photo project={project}/>
            <ContentDetails project={project}/>
        </ProjectItemWrapper>   
    );
}