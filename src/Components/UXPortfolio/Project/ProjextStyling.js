import styled from "styled-components";

//Project.js - ProjectWrapper
export const ProjectWrapper =styled.div`
    border-radius: 5px;
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    color: black;
    // background-color: pink;
`;

//ProjectPhoto.js - ProjectPhotoWrapper
export const ProjectPhotoWrapper = styled.div`
    padding: 10px;
    display: grid;
    place-items: center;
`;

//ProjectPhoto.js - ProjectPhotoBox
export const ProjectPhotoBox = styled.div`
    height: 75%;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 10px 30px -5px rgba(0, 123, 255, 0.5);
    background-image: url(${props => props.photoCover});
    background-size: cover;
    background-position: center center;
`;

//ProjectContent.js - ProjectContentWrapper
export const ProjectContentWrapper =styled.div`
    // background-color: lightgreen;
    height: 90%;
    padding: 10px;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr 50px;
    grid-gap: 10px;

    .content-title{
        display: grid;
        grid-template-columns: 2fr 1fr;

        .title-box{
            display: grid;
            place-items: center start;
            .title{
                font-weight: 700;
                letter-spacing: 1px;
            }
        }
        .subtitle-box{
            display: grid;
            place-items: center end;
            .subTitle{
                font-weight: 400;
                
            }
        }
    }

    .content-description{
        // background-color: lightpink;
        .description{
            font-size: 20px;
            text-align: justify;
        }
    }

    .content-links{
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        // background-color: lightblue;
    }
`;

//ProjectContentKeywords.js - ProjectKeywordsWrapper
export const ProjectKeywordsWrapper = styled.div`
height: 70%;
display: grid;
grid-template-rows: repeat(5, 1fr);
place-items: center end;
// background-color: yellow;

.keyword{
  margin:0;
  color: #888;
  font-weight: 300;
  font-size: 12px;
}

@media screen and (max-width: 500px){
  .keyword{
    font-size: 10px;
  }
}
`;