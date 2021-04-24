import React from "react";
import { ContainerSkillsStackItem } from "./Containers";

export default function SkillsDevStackItem(props){
    return (
        <ContainerSkillsStackItem place="center" padding="10px">
            <img src={props.image} alt='image-${props.image}' height={props.imageHeight}/>
        </ContainerSkillsStackItem>
    );
}