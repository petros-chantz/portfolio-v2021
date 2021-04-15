import styled from "styled-components";

export const NavBarWrapper = styled.div`
  height: 10vh;
  margin: 20px 100px 0px 100px;
  display: grid;
  place-items: center end;

  .navbar-menu-list{
    display: grid;
    place-items: center end;
    grid-gap: 10px;
  }

  .nav-menu-item{
    .item{
    margin:0;
    color: black;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 1px;
    
    :hover{
      color: white;
    }
  }
      :hover {
        background-color: black;
        color: white;
      }
  }

   @media screen and (max-width: 800px){
    margin: 20px 50px 20px 50px;
  }

  @media screen and (max-width: 400px){
    margin: 20px 25px 20px 25px;
  }
`;
