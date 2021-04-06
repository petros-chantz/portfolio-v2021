import styled from "styled-components";

//Home.JS HOMEWRAPPER
export const HomeWrapper = styled.div`
margin: 20px;
margin-top: 60px;

.home-body{
    height: 80%;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
   
}

@media screen and (min-width: 1600px){
    margin-bottom: 140px;
}

@media screen and (min-width: 1030px) and (max-width: 1559px){
    margin-bottom: 20px;
    .home-body{
        grid-template-rows: 1fr 4fr 1fr;
    }
}

@media screen and (min-width: 425px) and (max-width: 759px){
    .home-body{
        grid-template-rows: 1fr 6fr 1fr;
        grid-template-columns: 100%;
    }
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
                font-size: 30px !important;
            }
    }
`;

//HomeContent.js HOMECONTENTWRAPPER
export const HomeContentWrapper = styled.div`
    height: 100%;
    display: grid;
    padding-left: 50px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    place-items: center;

    @media screen and (max-width: 1100px){
        padding-left: 0;
    }

    @media screen and (max-width: 800px){
        padding-left: 0; 
    }

    @media screen and (max-width: 500px){
        grid-gap: 30px;
        .textBox-info {
            padding-top: 0px;
             width: 80%;
            .text{
                font-size: 16px !important;
            }
        }
    }

    @media screen and (max-width: 375px){
        grid-template-columns: 1fr;
        .textBox-info {
            padding-top: 0px;
            width: 100%;
            .text{
                font-size: 15px !important;
            }
        }
    }
    
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
        background-image: url('/assets/me.jpg');
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
    width: 100%;

    .link-text{
        margin:0;
         text-align: justify;
    }

    @media screen and (max-width: 1100px){
        .link-text{
            font-size: 15px;
        }
    }

    @media screen and (max-width: 800px){
            padding-top: 40px;
            
            grid-template-columns: repeat(4, 1fr);
            // grid-template-rows: repeat(2, 1fr);

            .link-text{
                font-size: 15px;
            }
    }

    @media screen and (max-width: 500px){
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: 1fr !important;
            place-items: center !important;
            padding-bottom: 20px;
            
            link-text{
                font-size: 15px;
            }
    }
`;