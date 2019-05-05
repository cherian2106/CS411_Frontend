import React, { Component } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import RaisedButton from 'material-ui/RaisedButton';
import loginpage from './LoginPage.module.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


class LoginPage extends Component {

  componentWillMount() {
    
  }

  goToSignUp = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
    render() {
      return (

          <div className = {loginpage.loginpage}>
            <div className = {loginpage.bar}>
              <div className = {loginpage.title}>KONNECT</div>
              <img className = {loginpage.image1} alt = "logo" src = "https://pbs.twimg.com/profile_images/813432457382875136/gNuIo1-P.jpg"></img>
                <Login className = {loginpage.login}></Login>
            </div>
            <div className = {loginpage.image_button_container}>
              <img className = {loginpage.image} alt = "logo" src = "https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/The%20Most%20Important%20Factors%20for%20Startup%20Success_Open%20Graph%20Image.png"></img>
              <MuiThemeProvider>
              <RaisedButton onClick = {this.goToSignUp} className = {loginpage.signup_here} label="Sign up Here" primary={true}/>
              </MuiThemeProvider>
            </div>
          <div className = {loginpage.block}>
            <img className = {loginpage.image2} alt = "logo" src = "https://i.pinimg.com/originals/15/82/b6/1582b643a5f0f4ea3546fa220f65db3e.png"></img>
          <div ref={(el) => { this.messagesEnd = el; }} className = {loginpage.signup}>
            <SignUp ></SignUp>
          </div>
          <div className = {loginpage.explain}>Connecting Entrepreneur and Startups Since 2019</div>
          <img className = {loginpage.image3} alt = "logo" src = "https://www.shareicon.net/data/2016/01/15/703724_people_512x512.png"></img>
          </div>
          <br/>
          </div>
      )
    }
}



export default LoginPage;