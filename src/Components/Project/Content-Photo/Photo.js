import React from "react";
import styled from "styled-components";

const PhotoWrapper = styled.div`
    display: grid;
    place-items: center;
    background-color: black;
    margin: 10px 50px 10px 150px;
    border-radius: 4px;
    background-image: url(${props => props.projectCovers});
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 1100px){
      margin: 10px;
    }
`;

export default function Photo(props) {
    const { project } = props;
    return (
        <PhotoWrapper projectCovers={project.photoCover}>
            
        </PhotoWrapper>
    );
}