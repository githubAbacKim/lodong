import styled from "styled-components";

export const Header = styled.div`
  height: 65vh;
  background-color:#FFB800;
  margin-top: 3em;
`;
export const ProjectAMainContent = styled.div`
  height: 315vh;

@media screen and (max-width: 575.98px) {
    height: 450vh;
  }
  
  @media  screen and  (min-width: 576px) and (max-width: 767.98px) {
    height: 470vh;
  }
  
  @media screen and  (min-width: 768px) and (max-width: 991.98px) {
    height: 480vh;
  }
  
  @media  screen and  (min-width: 992px) and (max-width: 1199.98px) {
    height: 365vh;
  }

  @media  screen and  (min-width: 1200px)  {
    height: 368vh;
  }

  @media screen and  (min-width: 1745px)  {
    height: 345vh;
  }
`;

export const FooterSelection = styled.div``;