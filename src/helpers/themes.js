import cv from "./../images/icons/cv.svg";
import cvLight from "./../images/icons/cv-light.svg";
import email from "./../images/icons/email.svg";
import emailLight from "./../images/icons/email-light.svg";
import github from "./../images/icons/github.svg";
import githubLight from "./../images/icons/github-light.svg";
import linkedIn from "./../images/icons/linkedIn.svg";
import linkedInLight from "./../images/icons/linkedIn-light.svg";

export const light = {
  color: {
    text: "#000000",
    background: "#FFFFFF",
    link: "#0C60BB",
    backgroundSkillsStack: "#FFFFFF",
  },
  borderRadius: "0px",
  icons: {
    email: `${email}`,
    cv: `${cv}`,
    github: `${github}`,
    linkedIn: `${linkedIn}`,
  },
};

export const dark = {
  color: {
    text: "#F1ECE3",
    background: "#262627",
    link: "#8EB8E5",
    backgroundSkillsStack: "#F1ECE3",
  },
  borderRadius: "5px",
  icons: {
    email: `${emailLight}`,
    cv: `${cvLight}`,
    github: `${githubLight}`,
    linkedIn: `${linkedInLight}`,
  },
};
