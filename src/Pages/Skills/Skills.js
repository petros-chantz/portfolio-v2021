import React from "react";
import PageDescription from "../../Components/Page/Description/PageDescription";
import PageTitle from "../../Components/Page/Title/PageTitle";
import DevStack from "./DevStack/DevStack";
import Expertises from "./Expertises/Expertises";
import { SkillsWrapper } from "./SkillsStyling";
import { useInView} from "react-intersection-observer";
import { useSpring} from 'react-spring'

export default function Skills() {
    const [ inView ] = useInView({
        initialInView: false,
          threshold: 0.25,
        triggerOnce: false
    });

  const animation = useSpring(
    inView
      ? {
          opacity: 1,
          from: { opacity: 0 },
          delay: "2s cubic-bezier(0.5, 1, 0.89, 1)",
          
        }
      : {
          opacity: 0
        }
  );
    return (
        <SkillsWrapper id="skills" style={animation} >
            <PageTitle PageTitle="Skills" />
            <PageDescription pageDescription="Pages bodyLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "/>
            <Expertises />
            <DevStack/>
        </SkillsWrapper>
    );
}