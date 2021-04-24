import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.color.background};
    display: grid;
    grid-template-columns: ${props => props.columns};
    grid-template-rows: ${props => props.rows};
    grid-gap: ${props => props.gap};
    place-items: ${props => props.place};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`;

export const ContainerSkillsStack = styled(Container)`
    background-color: ${props => props.theme.color.backgroundSkillsStack};
    border-radius: ${props => props.theme.borderRadius};
`;

export const ContainerSkillsStackItem = styled(Container)`
 background-color: ${props => props.theme.color.backgroundSkillsStack};
`;
