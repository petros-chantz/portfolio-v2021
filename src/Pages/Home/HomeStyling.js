import styled from "styled-components";

export const HomeWrapper = styled.div`
   // background-color: yellow;
    margin: 20px 100px 20px 100px;
    padding-bottom: 20px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

    @media screen and (max-width: 2600px){
      padding-bottom: 200px;
    }

   @media screen and (max-width: 1500px){
      padding-bottom: 10px;
    }

     @media screen and (max-width: 500px){
        margin: 20px 50px 20px 50px;
        grid-template-columns: 1fr;
     }

    @media screen and (max-width: 400px){
        margin: 20px 25px 20px 25px;
     }
`;