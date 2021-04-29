import React from "react";
import styled from "styled-components";

const PhotoWrapper = styled.div`
  background-color: black;
  border-radius: 4px;
  background-image: url(${(props) => props.projectPhoto});
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1100px) {
    margin: 10px;
  }
  width: 100%;
  height: 100%;
`;

export default function ProjectItemPhoto(props) {
  const { project } = props;
  return <PhotoWrapper projectPhoto={project.photoCover}>hello</PhotoWrapper>;
}
