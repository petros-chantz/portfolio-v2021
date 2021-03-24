import styled from "styled-components";

//DevPortfolio.js DevPortfolioWrapper
export const DevPortfolioWrapper = styled.div`
    height: 90vh;
    margin: 20px;
    display: grid;
    place-items: center;

    @media screen and (max-width: 759px){
        .body{
            height: 90% !important;
            width: 95% !important;
            .body-404{
                .text-404{
                    font-size: 100px !important;
                    font-weight: 900;
                    letter-spacing: 15px;
                
                }
            }
        }
    }

    .body{
        height: 65%;
        width: 70%;
        display: grid;
        grid-template-rows: 150px 1fr 1fr 1fr;
        color: black;



        .body-404{
            display: grid;
            place-items: center center;
            padding-bottom: 40px;

            .text-404{
                font-size: 140px;
                font-weight: 900;
                letter-spacing: 15px;
                font-style: italic;
            }
        }

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