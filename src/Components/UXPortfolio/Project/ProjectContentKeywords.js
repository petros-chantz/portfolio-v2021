import React from "react";
import {ProjectKeywordsWrapper} from "./ProjextStyling";
import { useSpring, animated } from "react-spring";

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