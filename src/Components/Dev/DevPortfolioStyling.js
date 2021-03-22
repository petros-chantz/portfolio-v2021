import styled from "styled-components";

//DevPortfolio.js DevPortfolioWrapper
export const DevPortfolioWrapper = styled.div`
    height: 70vh;
    margin: 20px;
    display: grid;
    place-items: center;

    .body{
        height: 60%;
        width: 70%;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        color: black;

        .body-text-title{
            display: grid;
            place-items: center start;

            .title{
                font-size: 70px;
                font-weight: 800;
            }
        }

        .body-text{
            font-size: 40px;

            .confetti{
                font-weight: 700;
            }
        }

        .body-confetti{
            display: grid;
            place-items: center;

            button{
                background-color: black;
                color: white;
                padding: 20px 30px 20px 30px;
                border-radius: 4px;
                border: none;
                letter-spacing: 1px;

                :active{
                    background-color: white;
                    padding: 20px 30px 20px 30px;
                    border: 2px solid black;
                    letter-spacing: 1px;
                    font-weight: 700;
                    color: black;
                }
            }
        }

    }
`;