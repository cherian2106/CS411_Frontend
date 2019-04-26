import React, { Component } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import loginpage from './LoginPage.module.scss'
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


class LoginPage extends Component {
    render() {
      return (
          <div className = {loginpage.loginpage}>
              <Login className = {loginpage.login}></Login>
              <img className = {loginpage.image} alt = "logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2TZvmL_-NqYR_3afGi8cnFDEEIMvEMQ7-k4tpIpL8GPkBbVaY"></img>
              <SignUp className = {loginpage.signup}></SignUp>
          </div>
      )
    }
}

export default LoginPage;