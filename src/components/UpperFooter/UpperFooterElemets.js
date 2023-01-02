import styled from "styled-components";


export const UpperFooterContent = styled.div`

`;


export const RedText = styled.div`
    color:
    #EC0009;
    font-family: 'Lato', sans-serif;
`;

export const UpperRightFooterH1 = styled.div`
        font-size:10vh;
        margin-bottom: 4rem;
        text-align: right;
        margin-right: 10rem;
        font-family: 'Lato', sans-serif;
        
        @media screen and (max-width: 750px){
        text-align: center;
        margin-right: 0rem;
        font-size:3vh;
        }
        @media screen and (max-width: 850px){
            text-align: center;
            margin-right: 0rem;
            font-size:3vh;
            }
`;  
export const UpperLeftFooterH1 = styled.div`
    font-size:10vh;
    margin-bottom: 4rem;
    text-align: left;
    margin-left: 10rem;
    font-family: 'Lato', sans-serif;
    @media screen and (max-width: 750px){
    text-align: center;
    font-size:3vh;
    margin-left: 0rem;
    }
    @media screen and (max-width: 850px){
        text-align: center;
        margin-right: 0rem;
        font-size:3vh;
        }
`;
