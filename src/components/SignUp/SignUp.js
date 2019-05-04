import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import signup from './SignUp.module.scss'
import Auth from '../../config.js'
class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            email:'',
            password:''
        }
    }
// Initialize Firebase

SignUpClick = () =>{
    // console.log(this.state.email)
    // console.log(this.state.password)
    Auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(function(result){ 
      window.alert("Sign Up Successful");
    })
    .catch(function(err){
      console.log(err)
      window.alert(err.code);
    });
    // res.catch(e => console.log(e.message))
}

    render() {
      return (
        <div className = "FormContainer">
        <MuiThemeProvider>
          <div>
            <TextField
             className = {signup.username}
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({username:newValue})}
            />
           <br/>
           <TextField
               className = {signup.user}
               hintText="Enter your email"
               floatingLabelText="Email"
               onChange = {(event,newValue) => this.setState({email:newValue})}
            />
            <br/>
             <TextField
               className = {signup.password}
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
              />
             <br/>
             <RaisedButton onClick = {this.SignUpClick} className = {signup.submit} label="Sign up" primary={true}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
    }
}
export default SignUp;