import React from "react";
import Link from "../../../Components/Link/Link";
import { HomeContentWrapper, ContentTitleWrapper, ContentDescriptionWrapper, LinkHomeContentWrapper} from "./HomeContentStyling";

export default function HomeContent() {
    return (
        <HomeContentWrapper>
            <ContentTitleWrapper>
                <h2 className="content-title">Hey there, <a href="https://www.linkedin.com/in/petroschantz/" target="_blank" rel="noopener noreferrer" className="content-title-link">Petros</a> here!</h2>
            </ContentTitleWrapper>
            <ContentDescriptionWrapper>
                <h5 className="description-text">I’m a <span className="description-text-bold">UX Researcher</span> and an all-around <span className="description-text-bold">Creative Technologist</span> .</h5>
                <h5 className="description-text">I hold a Master's Degree in Constructive Design Research from Technical University of Eindhoven. </h5>
                <h5 className="description-text">I take a hands-on approach to research with emphasis on the use of data as a design material.
                    Currently I’m using <span className="description-text-bold">React.js</span> and <span className="description-text-bold">D3.js</span> to explore new ways to design rich meaningful interactions and visualise information.</h5>
                <h5 className="description-text">I’m ready to take the next step and join your team!</h5>
            </ContentDescriptionWrapper>
            <LinkHomeContentWrapper>
                <div className="text-link-wrapper">
                    <p className="text-link">petros.chantz [at] gmail [dot] com</p>
                </div>
                <Link linkDescription="cv" linkUrl="https://www.dropbox.com/s/m50fy9t5g6536u2/Petros-Chantzopoulos-CV.pdf?dl=0"/>
                <Link linkDescription="linkedIn" linkUrl="https://www.linkedin.com/in/petroschantz/"/>
                <Link linkDescription="github" linkUrl="https://github.com/petros-chantz"/>
            </LinkHomeContentWrapper>
        </HomeContentWrapper>
    );
}