import styled from "styled-components";


export const Header = styled.div`
height: 65vh;
background-color:#084520;
margin-top: 3em;
`;
export const ProjectBMainContent = styled.div`
height: 200vh;
@media screen and (max-width: 575.98px) {
    height: 395vh;

  }
  
  @media  screen and  (min-width: 576px) and (max-width: 767.98px) {
    height: 396vh;
  }
  
  @media screen and  (min-width: 768px) and (max-width: 991.98px) {
    height: 446vh;
  }
  
  @media  screen and  (min-width: 992px) and (max-width: 1199.98px) {
    height: 325vh;
  }


  @media  screen and  (min-width: 1200px)  {
    height: 325vh;
  }
   @media screen and  (min-width: 1745px)  {
    height: 325vh;
    }
`;
export const FooterSelection = styled.div``;