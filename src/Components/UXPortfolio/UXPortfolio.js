import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import Project from "./Project/Project";
import { useSpring, animated } from "react-spring";

const UXPortfolioWrapper = styled.div`
    height: 350vh;
    margin:20px;

    .body {
        height: 100%;
        display:grid;
        grid-template-rows: 70px 1fr 50px;
        place-items: center;

        .body-title{
            height: 100%;
            width: 100%;
            display: grid;
            place-items: center;
            padding: 10px;

            .title {
                font-size: 50px;
                font-weight: 700;
                letter-spacing: 1px;
                color: black;
            }
        }

        .body-content{
            height: 95%;
            width:70%;
            display:grid;
            grid-template-rows: repeat(4, 1fr);
            grid-gap: 50px;
        }

        .body-top{
            height: 100%;
            width: 70%;
            display: grid;
            place-items: center end;

            .body-top-text{
                font-size: 20px;
            }
        }
    }
`;

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
                    <h1 className="title">UX Portfolio - Selected Work</h1>
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

