import styled from "styled-components";

export const Header = styled.div`
    height: 65vh;
    background-color:#004D9E;
    margin-top: 3em;
`;


export const ProjectDMainContent = styled.div`
height: 100vh;

@media screen and (max-width: 575.98px) {
    height: 230vh;
  }
  
  @media  screen and  (min-width: 576px) and (max-width: 767.98px) {
    height: 230vh;
  }
  
  @media screen and  (min-width: 768px) and (max-width: 991.98px) {
    height: 230vh;
  }
  
  @media  screen and  (min-width: 992px) and (max-width: 1199.98px) {
    height: 230vh;
  }


  @media  screen and  (min-width: 1200px)  {
    height: 330vh;
  }
   @media screen and  (min-width: 1745px)  {
    height: 345vh;
}
`;
export const FooterSelection = styled.div``;