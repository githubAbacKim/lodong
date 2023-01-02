import styled from "styled-components";



export const FooterBottom = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 30vh;
    padding: 6rem;
`;

export const FooterContent = styled.div`
padding-top: 4rem;
padding-left: 10rem;
max-width: 100rem;
padding-bottom: 8rem;
@media screen and (max-width:   700px) {
        
padding-left: 0rem;
}

`;
  
  export const FooterCopyright = styled.div`
  margin-top: 3vh;
  color: #A3A3A3;
  @media screen and (max-width:   700px) {
   font-size: 0.5rem;
   text-align: center;
}
  `;
