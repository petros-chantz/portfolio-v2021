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
        <PageDescription pageDescription="I’m a person who wears a lot of hats. As my practise is multi phased and
          interdisciplinary my skill sets and expertises coincidentally reflect that breadth and variety. Above all I am a
          strong believer in the practise of self-directed and continuous learning and the ability to self reflect before action
          taking. These beliefs have been formed in my practise from my own appreciation of craftsmanship alongside
          the craftsmanship of people that I have had the chance to work with. "/>
            <Expertises />
            <DevStack/>
        </SkillsWrapper>
    );
}