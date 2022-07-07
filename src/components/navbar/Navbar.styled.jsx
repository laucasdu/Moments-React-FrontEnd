import styled from "styled-components";

//Navbar
export const CtNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 20vw;
  background-color: #072104;

  @media screen and (max-width: 820px) {
    height: 200px;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 415px) {
    margin-bottom: 6%;

  }
`;

export const CtLogo = styled.div`
display: flex;
justify-content: center;
  width: 20%;
  font-size: 0,5em;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const TxtLogo = styled.h1`
  color: #EAD9F6;
  &:hover,
  :active,
  :link,
  :visited {
    text-decoration: none;
  }
`;

// //Search
// export const CtSearch = styled.form`
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// export const Input = styled.input`
//   width: 100%;
//   height: 6vh;
//   min-width: 10rem;
//   position: relative;
//   font-family: 'Courier New', Courier, monospace;
//   font-weight: 600;
//   border: none;
//   padding: 0 4rem 0 1.5rem;
//   border-radius: 0.2vw;
//   font-size: 14px;
//   outline: none;
//   background-color: rgba(249, 249, 249, 0.1843137255);
//   --webkit-backdrop-filter: blur( 0.7rem );

  
// `;

// export const BtSearch = styled.button`
//   background: none;
//   color:#98B5A4;
//   border: none;
//   position: absolute;
//   right: 2%;
// `;

//Menú
export const CtInfo = styled.div`
    display: flex;
    width: 20%;
    flex-direction: row;
    font-size: 25px;
    margin-top: 25px;
    justify-content: space-around;
    font-size: 25px;
    text-decoration: none;
    /* margin-top: 5px; */
    margin-right: 70px;

`;

export const TxtHome = styled.li`
  list-style-type: none;
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 0.2vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 25px;
  font-size: 16px;
  background-color: #98B5A4;
  color:#072104;

`;

export const TxtNew = styled.li`
  list-style-type: none;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 25px;
  border-radius: 0.2vw;
  background-color: #98B5A4;
  color:#072104;



`;

export const TxtRegistrate = styled.li`
  list-style-type: none;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0.2vw;
  border-bottom: 2px solid #98B5A4;
  background-color: #98B5A4;
  color:#072104;



`;



