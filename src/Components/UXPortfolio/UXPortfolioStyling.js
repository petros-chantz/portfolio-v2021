import styled from "styled-components";

export const UXPortfolioWrapper = styled.div`
height: 350vh;
margin:20px;

.body {
    height: 100%;
    display:grid;
    grid-template-rows: 70px 1fr 50px;
    place-items: center;

    .body-title{
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center;
        padding: 10px;

        .title {
            font-size: 50px;
            font-weight: 700;
            letter-spacing: 1px;
            color: black;
        }
    }

    .body-content{
        height: 95%;
        width: 70%;
        display:grid;
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 40px;
    }

    .body-top{
        height: 100%;
        width: 70%;
        display: grid;
        place-items: center end;

        .body-top-text{
            font-size: 20px;
        }
    }
}
`;