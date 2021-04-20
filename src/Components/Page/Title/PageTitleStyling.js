import styled from "styled-components";
import { animated } from "react-spring";

export const PageTitleWrapper = styled(animated.div)`
    display: grid;
    place-items: center start;
    padding-top: 10px;

    .page-title{
        color: black;
        margin:0;
        font-size: 40px;
        font-weight: 700;
    }
`;