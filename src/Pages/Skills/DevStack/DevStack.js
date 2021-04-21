import React from "react";
import { DevStackWrapper, DevStackTitle, DevStackPicturesBlock, PictureBlockWrapper } from "./DevStackStyling";
import Figma from "./../../../Images/Figma-Icon.svg"
import Storybook from "./../../../Images/storybook.png";
import ReactLogo from "./../../../Images/react-logo.png";
import AWS from "./../../../Images/aws-logo.png";
import StyledComponents from "./../../../Images/styled-components.svg";

export default function DevStack() {
    return (
        <DevStackWrapper>
            <DevStackTitle>
                <p className="devStack-title">My current dev stack:</p>
            </DevStackTitle>
            <DevStackPicturesBlock>
                <PictureBlockWrapper>
                    <img src={Figma} alt="figma"height="40"/>
                </PictureBlockWrapper>
                <PictureBlockWrapper>
                    <img src={Storybook} alt="figma"height="50"/>
                </PictureBlockWrapper>
                <PictureBlockWrapper>
                     <img src={StyledComponents} alt="figma"height="50"/>
                </PictureBlockWrapper>
                <PictureBlockWrapper>
                     <img src={ReactLogo} alt="figma"height="50"/>
                </PictureBlockWrapper>
                <PictureBlockWrapper>
                     <img src={AWS} alt="figma"height="30"/>
                </PictureBlockWrapper>
            </DevStackPicturesBlock>
        </DevStackWrapper>
    );
}