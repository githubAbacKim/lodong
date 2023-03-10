import styled from "styled-components";

export const TeamContainer  = styled.div`
padding-top: 1rem;
padding-bottom: 10rem;
`;


export const Images  = styled.div`
margin-left: 3rem;

@media screen and (max-width: 575.98px) {
    margin-left: 0rem;
}

@media  screen and  (min-width: 576px) and (max-width: 767.98px) {
    margin-left: 0rem;
}

@media screen and  (min-width: 768px) and (max-width: 991.98px) {
    margin-left: 0rem;
}

`;


export const TeamContent  = styled.div`
display: flex;
text-align: center;
justify-content:  center;
margin-top: 30rem;

`;

export const TeamContentColumns  = styled.div`
padding: 0.4rem;
    @media screen and (max-width: 575.98px) {
        padding: 0rem;
    }
  
`;


export const TeamImages  = styled.div`
margin-top: 3rem;
display: flex;

@media screen and (max-width: 575.98px) {
   display:block;
}

@media  screen and  (min-width: 576px) and (max-width: 767.98px) {
    display:block;
}

@media screen and  (min-width: 768px) and (max-width: 991.98px) {
    display:block;
}
`;
export const TeamContentInsideColumns  = styled.div`
position:relative;
bottom: 9rem;

`;


export const TeamContentH1  = styled.div`
font-size: 3rem;
font-weight: bold;
font-family: 'Lato', sans-serif;
position:relative;
bottom: 1rem;

@media screen and (max-width: 570.98px) {
text-align: center;
bottom: 1rem;
font-size: 2rem;
   
}



`;
export const TeamContentDiv  = styled.div`
padding: 1rem;
border-radius: 8px;
width:53rem;
margin-top:4rem;
border: 2px solid red;
outline: none;
border-color: #EC0009;
box-shadow: 0 0 10px #EC0009;


@media screen and (max-width: 575.98px) {

    margin-top:10rem;
    width:20rem;
    margin-top:4rem;
}

@media  screen and  (min-width: 576px) and (max-width: 767.98px) {
    width:30rem;
    margin-top:4rem;
}

@media screen and  (min-width: 768px) and (max-width: 991.98px) {
    width:30rem;
    margin-top:2rem;
}
`;


export const TeamContentParagraph  = styled.div`
font-weight: bold;
color:#000000;
font-style: normal;
line-height: 25px;
font-family: 'Lato', sans-serif;

`;