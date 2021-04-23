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

export const ContainerLink = styled(Container)`

`;

