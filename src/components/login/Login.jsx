import React, { useState } from 'react'
import {authService} from '../../services/authService';
import { BtCancel, BtEdit, CtButton, CtForm, CtTitlePrincipal, CtTxt, Form, Input, InputDescription, TxtPrincipal } from './Login.styled';

function Login() {
    const [userData, setUserData] = useState({
        username:"",
        email:"",
        password:"",
    });
  

const registrer = () => {
    authService.registrer(userData).then(res =>{
        console.log(res);
    })
}

const login = () => {
    delete userData["email"];
    authService.login(userData).then(res =>{
        console.log(res); 
  })
} 


    function onInputChange (e) {
      let name = e.target.name;
        let value = e.target.value;
        setUserData({...userData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        e.target.id == "login" ? login() : registrer();
    };

console.log("hola")
  return (
    <CtForm>
    <Form>
      <CtTitlePrincipal> 
    <TxtPrincipal>FORM</TxtPrincipal>
    </CtTitlePrincipal>
      <CtTxt>User</CtTxt>
          <Input
            onChange={(e)=>{onInputChange(e)}}
            value={userData.username}
            name="username"
            type="text"
            aria-label="user username"
            placeholder="User username"
          />
        <CtTxt>Url</CtTxt>
          <Input
            onChange={(e)=>{onInputChange(e)}}
            value={userData.email}
            name="email"
            type="email"
            aria-label="email"
            placeholder="User email"
            />
            <CtTxt>Passwork</CtTxt>
          <InputDescription
            onChange={(e)=>{onInputChange(e)}}
            value={userData.password}
            name="password"
            type="password"
            placeholder="User passwork"
            />
            <CtButton>
             <BtEdit type="submit" id="login" onClick={handleSubmit}>LOGIN</BtEdit>
             <BtEdit type="submit" id="registrer" onClick={handleSubmit} >REGISTRER</BtEdit>
             

            </CtButton>
        </Form>
        </CtForm>
  )

}

export default Login