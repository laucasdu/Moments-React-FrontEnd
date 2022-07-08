import styled from "styled-components";


export const CtMomentList = styled.div`
    justify-content: center;
    grid-template-columns: 20% 20% 20% 20%;
    display: grid;
    gap: 4em;  
    background-color: white;
    
    
@media only screen and (max-width:820px) {
    grid-template-columns:47% 47%;
    gap: 2em;  


    /* display: block; */
}
@media screen and (max-width: 415px) {
   grid-template-columns: 80%;
   gap: 0em;  

   /* margin-left: 8%; */

} 
`;



