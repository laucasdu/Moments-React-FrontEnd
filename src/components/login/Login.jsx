import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {authService} from '../../services/authService';
import { localAuthService } from '../../services/localAuthService';
import { 
  BtForm, 
  CtButton, 
  CtForm, 
  CtTitlePrincipal, 
  CtTxt, 
  Form, 
  Input, 
  TxtPrincipal } 
  from './Login.styled';


function Login() {

    const navigate = useNavigate();
    const location = useLocation().pathname
    
    const [userData, setUserData] = useState({
        username:"",
        email:"",
        password:"",
    });

      useEffect(() => {
      },[location])

const signup = () => {
  console.log(userData);
    localAuthService.deleteAuthUser();
    authService.signup(userData).then((res) => {
        console.log(res);
      login();

    })


    // .catch((err) => alert(err.response.data.message));

};

const login = () => {
    authService.login(userData).then((res) =>{
        console.log(res); 
        
        const authUser = {
            token: res.accessToken,
            username: res.username,
            id: res.id,
          };
          localAuthService.saveAuthUser(authUser);
          navigate('/', {replace: true});
          resetInputs();
    })

}

    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
        setUserData({...userData, [name]: value});
    };


    // const loginSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(userData);
    //     e.target.id === "login" ? login() : signup();
    // };
      
  //Funció que serveix per buidar el formulari
  const resetInputs = () => {
    setUserData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <CtForm>
    <Form>
      <CtTitlePrincipal> 
    <TxtPrincipal>Please, fill the form</TxtPrincipal>
    </CtTitlePrincipal>
      <CtTxt>Username</CtTxt>
          <Input
            onChange={handleInput}
            value={userData.username}
            name="username"
            type="text"
            aria-label="user username"
            placeholder="User username"
          />
        {location === "/signup"&&
         <>
          <CtTxt>E-mail</CtTxt>
          <Input
            onChange={handleInput}
            value={userData.email}
            name="email"
            type="email"
            placeholder="User email"
            />
            </>}

            <CtTxt>Password</CtTxt>
          <Input
            onChange={handleInput}
            value={userData.password}
            name="password"
            type="password"
            placeholder="User password"
            />

            <CtButton> 
            {location === "/login" ?
              <BtForm type="button" id="login" onClick={login}>LOG IN</BtForm>
              :<BtForm type="button" id="signup" onClick={signup} >SIGN UP</BtForm>
            }
            </CtButton>
        </Form>
        </CtForm>
  )

}

export default Login