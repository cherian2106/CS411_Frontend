import React, { Component } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import loginpage from './LoginPage.module.scss'
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


class LoginPage extends Component {

  componentWillMount() {
    
  }
    render() {
      return (

          <div className = {loginpage.loginpage}>
            <div className = {loginpage.bar}>
              <div className = {loginpage.title}>KONNECT</div>
              <img className = {loginpage.image1} alt = "logo" src = "https://pbs.twimg.com/profile_images/813432457382875136/gNuIo1-P.jpg"></img>
                <Login className = {loginpage.login}></Login>
            </div>
            <img className = {loginpage.image} alt = "logo" src = "https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/The%20Most%20Important%20Factors%20for%20Startup%20Success_Open%20Graph%20Image.png"></img>

          <div className = {loginpage.block}>
            <img className = {loginpage.image2} alt = "logo" src = "https://i.pinimg.com/originals/15/82/b6/1582b643a5f0f4ea3546fa220f65db3e.png"></img>
          <div className = {loginpage.signup}>
            <SignUp></SignUp>
          </div>
          <img className = {loginpage.image3} alt = "logo" src = "https://www.shareicon.net/data/2016/01/15/703724_people_512x512.png"></img>
          </div>

          </div>
      )
    }
}



export default LoginPage;