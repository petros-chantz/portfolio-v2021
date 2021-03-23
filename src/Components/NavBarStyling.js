import styled from "styled-components";

export const NavBarWrapper = styled.div`
  height: 6vh;
  margin: 20px;
  border-bottom: 3px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-height: 600px) {
    border-bottom: none;
  }

  @media screen and (max-width: 1100px){
    height: 7vh;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 800px){
    .nav-name-text{
      font-size: 24px;
    }

    .nav-portfolio-text{
      font-size: 15px; 
    }
  }

  @media screen and (max-width: 500px) {
    height: 10vh;
    grid-gap: 5px;
    display: grid;
    grid-template-columns: 1fr 2fr;

   .portfolios{
     place-items: center end;
   }

    .nav-name-text{
      font-size: 17px;
    }
   
  }

  @media screen and (max-width: 330px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    .nav-name-text{
      font-size: 15px;
    }

    .portfolios{
      place-items: center;
      .nav-portfolio-text{
        font-size: 12px;
      }
    }
  }




  .nav-name-wrapper{
    height: 100%;
    display: grid;
    place-items: center start;
    
    .nav-name-text{
      margin: 0;
      padding: 0;
      font-weight: 700;
      text-transform: uppercase;
      color: black;
      letter-spacing: 1px;

      :hover {
        background-color: black;
        color: white;
      }
    }
  }

  .portfolios{
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .nav-portfolio-wrapper{
    height: 100%;
    display: grid;
    place-items: center;

    .nav-portfolio-text{
      margin: 0;
      padding: 0;
      font-weight: 500;
      text-transform: uppercase;
      color: black;

      :hover {
        background-color: black;
        color: white;
      }
    }
  }
`;