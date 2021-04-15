import styled from "styled-components";

export const HomeContentWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 2fr 2fr 1fr;
    place-items: center;

    @media screen and (max-width: 500px){
        grid-template-rows: 200px 1fr 200px;
    }
`;

export const ContentTitleWrapper = styled.div`
    display: grid;
    place-items: end end;
    margin-top: 20px;

    @media screen and (max-width: 1040px){
           place-items: center !important; 
    }

    .content-title{
        color: black;
        font-size: 96px;
        font-weight: 700;
        letter-spacing: 1px;
        margin:0;

        @media screen and (max-width: 800px){
            font-size: 80px;
        }
        @media screen and (max-width: 500px){
            font-size: 50px;
        }
        @media screen and (max-width: 350px){
            font-size: 40px;
        }
    }

    .content-title-link{
        color: black;
        :hover{
            color: #0C60BB;
        }
    }
`;

export const ContentDescriptionWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    
    .description-text{
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        text-align: justify;
        letter-spacing: 1px;
    }

    .description-text-bold{
        font-weight: 600;
    }
`;

export const LinkHomeContentWrapper = styled.div`
    padding-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;

    @media screen and (max-width: 500px){
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: 1fr;
    }

    .text-link-wrapper{
        display: grid;
        place-items: center;

        .text-link{
        font-size: 14px;
        margin:0;

        @media screen and (max-width: 500px){
           font-size: 18px;
        }

        @media screen and (max-width: 340px){
           font-size: 16px;
        }
        }

       
    }
`;