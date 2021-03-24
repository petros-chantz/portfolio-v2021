import React from "react";
import { HashLink } from "react-router-hash-link";
import Project from "./Project/Project";
import { useSpring, animated } from "react-spring";
import {UXPortfolioWrapper} from "./UXPortfolioStyling";

export default function UXPortfolio(props){
    const { projects } = props;
    const ani = useSpring({
        opacity: 0.9,
        from: { opacity: 0 }
      });

    return(
        <UXPortfolioWrapper id="ux-portfolio">
            <animated.div className="body" style={ani}>
                <div className="body-title">
                    <h3 className="title">Design Projects - Selected Work</h3>
                </div>
                <div className="body-content">
                    {Object.keys(projects).map((id) => {
                        return (
                            <Project projects={projects[id]}/>
                        );
                    })}
                </div>
                <div className="body-top">
                <HashLink smooth to="/#top">
                    <h3 className="body-top-text">Back to the Top</h3>
                </HashLink>
                </div>
            </animated.div>
        </UXPortfolioWrapper>
    );
}

