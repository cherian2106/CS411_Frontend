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
          console.log(result);
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
             hintText="Enter your Username"
             floatingLabelText="Username"
            //  value = {this.state.username}
            //  ref={input => this.username = input}
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
               className = {signup.user}
               hintText="Enter your email"
               floatingLabelText="Email"
              //  value = {this.state.email}
              //  ref={input => this.email = input}
               onChange = {(event,newValue) => this.setState({email:newValue})}
               />
            <br/>
             <TextField
               className = {signup.password}
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
              //  value = {this.state.password}
              //  ref={input => this.password = input}
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