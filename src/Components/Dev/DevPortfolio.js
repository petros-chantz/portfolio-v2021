import React, {useState} from "react";
import { useSpring, animated } from "react-spring";
import Confetti from "react-dom-confetti";
import {DevPortfolioWrapper} from "./DevPortfolioStyling";

export default function DevPortfolio(){
    const props = useSpring({
        opacity: 0.9,
        from: { opacity: 0 }
      });
    
      const config = {
        angle: "70",
        spread: "139",
        startVelocity: "59",
        elementCount: 100,
        dragFriction: 0.19,
        duration: "2000",
        stagger: 1,
        width: "24px",
        height: "10px",
        perspective: "950px",
        colors: ["#FFEA4D", "#FF3D24", "#007BFF", "#00458F", "#77BFA3"]
      };
      const [confetti, setConfetti] = useState(false);
    
      function handleButtonClick() {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 1000);
      }

    return(
        <DevPortfolioWrapper id="dev-portfolio">
            <animated.div style={props} className="body">
                <div className="body-404"><h2 className="text-404">404</h2></div>
                <div className="body-text-title"><h2 className="title">Oops sorry!</h2></div>
                <h3 className="body-text">This page isn't ready yet, but the <span className="confetti">confetti cannon</span> is!</h3>
                <div className="body-confetti">
                    <button onClick={() => handleButtonClick()}><Confetti active={confetti} className="confetti-btn" config={config}/> Confetti cannon</button>
                </div>
            </animated.div>
        </DevPortfolioWrapper>
    );
}