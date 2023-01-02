import styled from "styled-components";



export const FooterBottom = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 30vh;
    padding: 6rem;
`;

export const FooterContent = styled.div`
padding-top: 4rem;
padding-left: 3rem;
max-width: 100rem;
padding-bottom: 8rem;

`;
export const FooterRow = styled.div`
    &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const FooterColumn = styled.div`
float: left;
width: 18.33%;
padding: 20px;
@media screen and (max-width:   x) {
      width: 100%;

  }
  
  `;
  
  export const FooterCopyright = styled.div`
  margin-top: 3vh;
  color: #A3A3A3;

  `;
