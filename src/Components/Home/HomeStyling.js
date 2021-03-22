import styled from "styled-components";

//Home.JS HOMEWRAPPER
export const HomeWrapper = styled.div`
height: 90vh;
margin: 20px;
margin-top: 60px;

.home-body{
    height: 80%;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
   
}
`;


//HomeTitle.js TITLEWRAPPER
export const TitleWrapper = styled.div`
    height: 100%;
    display: grid;
    place-items: center;

    .title{
        margin: 0;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 1px;
    }


    .body-title-link{
        color: black;
        :hover{
            color: #007bff;
        }
    }

    @media screen and (max-width: 500px){
            .title{
                font-size: 50px !important;
            }
`;

//HomeContent.js HOMECONTENTWRAPPER
export const HomeContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    padding-left: 50px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    place-items: center;
    
    .textBox-info{
        padding-top: 30px;
        display: grid;
        place-items: center start;
        line-height: 2.2;

        .text {
            font-size: 20px;
            text-align: justify;
            letter-spacing: 1px;
        }

        .text-bold{
            font-weight: 700;
        }

        .text-blue{
            font-weight: 700;
            color: #007bff;
        }
    }


    @media screen and (max-width: 500px){
            grid-template-rows: 1fr 300px;

            .textBox-info {
                padding-top: 20px;
                .text{
                    font-size: 18px !important;
                    text-align: left !important;
                }
            }
    }
`;

//HomeContentPhoto.js - HomeContentPhotoWrapper
export const HomeContentPhotoWrapper = styled.div`
    height: 100%;
    display: grid;
    place-items: center;
    padding-top: 40px;

    .card {
        width: 30ch;
        height: 30ch;
        background: black;
        border-radius: 5px;
        background-image: url('/me.JPG');
        background-size: cover;
        background-position: center center;
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.5s;
        will-change: transform;
        border-radius: 50%;

        :hover {
            box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.6);
        }
    }

    @media screen and (max-width: 800px){
       .card{
        width: 25ch;
        height: 25ch;
       }
        
    }

    @media screen and (max-width: 500px){
            padding-top: 0 !important;

            .card{
                width: 20ch;
            height: 20ch;
            }
    }
`;

//HomeLinks.js - HomeLinksWrapper 
export const HomeLinksWrapper = styled.div`
    height: 100%;
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;

    .link-text{
        margin:0;
         text-align: justify;
    }

    @media screen and (max-width: 800px){
            padding-top: 40px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);

            .link-text{
                font-size: 12px;
            }
    }

    @media screen and (max-width: 500px){
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: 1fr !important;
            place-items: start !important;
            padding-bottom: 20px;
            
            link-text{
                font-size: 15px;
            }
    }
`;