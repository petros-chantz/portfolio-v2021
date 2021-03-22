import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import HomeContentPhoto from "./HomeContentPhoto";

const HomeContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    padding-left: 50px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    place-items: center;
    
    .textBox-info{
        padding-top: 30px;
        display: grid;
        place-items: center start;
        line-height: 2.2;

        .text {
            font-size: 20px;
            text-align: justify;
            letter-spacing: 1px;
        }

        .text-bold{
            font-weight: 800;
        }

        .text-blue{
            font-weight: 700;
            color: #007bff;
        }
    }


    @media screen and (max-width: 500px){
            grid-template-rows: 1fr 300px;

            .textBox-info {
                padding-top: 20px;
                .text{
                    font-size: 18px !important;
                    text-align: left !important;
                }
            }
    }
`;

export default function HomeContent(){
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 }
    });

    return(
        <HomeContentWrapper>
                <div className="textBox-info">
                    <animated.h3 style={props} className="text">I’m a span <span className="text-bold">UX Researcher</span> and an all-around <span className="text-bold">Creative Technologist</span>. </animated.h3>
                    <br/>
                    <animated.h3 style={props} className="text">I hold a Master's Degree in Constructive Design Research from Technical University 
                    of Eindhoven and I have 3+ years experience in conducting various design and research projects for clients. I take a hands-on approach to research with emphasis on the use of data as a design material.
                    </animated.h3>
                    <br/>
                    <animated.h3 style={props} className="text">My fascination for data-enabled design has led me into frontend web development where I’m using <span className="text-bold">React.js</span> and <span className="text-bold">D3.js</span> to explore new ways to design rich meaningful interactions and visualise information.</animated.h3>
                    <br/>
                    <animated.h3 style={props} className="text">I’m ready to take the next step and join your team!</animated.h3>
                </div>
                <HomeContentPhoto/>
        </HomeContentWrapper>
    );
}