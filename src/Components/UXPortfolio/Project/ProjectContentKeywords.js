import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const ProjectKeywordsWrapper = styled.div`
height: 100%;
display: grid;
grid-template-rows: repeat(5, 1fr);
place-items: center end;

.keyword{
  margin:0;
  color: #888;
  font-weight: 300;
  font-size: 12px;
}

@media screen and (max-width: 500px){
  .keyword{
    font-size: 10px;
  }
}
`;

export default function ProjectContentKeywords(props){
    const {project } = props;
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 }
      });

    return(
        <ProjectKeywordsWrapper>
            <div><animated.h6 style={animation} className="keyword">{project.keywords.keyword1}</animated.h6></div>
            <div><animated.h6 style={animation} className="keyword">{project.keywords.keyword2}</animated.h6></div>
            <div><animated.h6 style={animation} className="keyword">{project.keywords.keyword3}</animated.h6></div>
            <div><animated.h6 style={animation} className="keyword">{project.keywords.keyword4}</animated.h6></div>
            <div><animated.h6 style={animation} className="keyword">{project.keywords.keyword5}</animated.h6></div>
        </ProjectKeywordsWrapper>
    );
}