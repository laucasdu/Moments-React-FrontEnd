import styled from "styled-components";


export const CtMomentList = styled.div`
    justify-content: center;
    grid-template-columns: 20% 20% 20% 20%;
    display: grid;
    gap: 4em;  
    background-color: white;
    
    
@media only screen and (max-width:820px) {
    grid-template-columns:45% 45%;
    gap: 2em;  
    margin-right: 5%;


    /* display: block; */
}
@media screen and (max-width: 360px) {
   grid-template-columns: 100%;
   /* margin-left: 8%; */

} 
`;



