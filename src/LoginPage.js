import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './LoginPage.css'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


class LoginPage extends Component {
    render() {
      return (
          <div className = "LoginPage">
              <Login className = "Login"> 
              </Login>
              <img className = "image" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2TZvmL_-NqYR_3afGi8cnFDEEIMvEMQ7-k4tpIpL8GPkBbVaY"></img>
               <div>
              <SignUp className = "SignUp"></SignUp>
              </div> 
          </div>
      )
    }
}

export default LoginPage;