import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import firebase from 'firebase';
import signup from './SignUp.module.scss'
class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            username:'',
            password:''
        }
    }
// Initialize Firebase

SignUpClick = () =>{
    let config = {
        apiKey: "AIzaSyBaoiWVV8vuD8uiRI3AiFEvC3xCs8m2MTY",
        authDomain: "cs411-c57f9.firebaseapp.com",
        databaseURL: "https://cs411-c57f9.firebaseio.com",
        projectId: "cs411-c57f9",
        storageBucket: "cs411-c57f9.appspot.com",
        messagingSenderId: "259780274004"
      };
      firebase.initializeApp(config);

    const auth = firebase.auth()
    const res = auth.createUserWithEmailAndPassword(this.state.username, this.state.password)
    res.catch(e => console.log(e.message))
}

    render() {
      return (
        <div className = "FormContainer">
        <MuiThemeProvider>
          <div>
            <TextField
             className = {signup.user}
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           <TextField
               className = {signup.username}
               hintText="Enter your Username"
               floatingLabelText="Username"
               onChange = {(event,newValue) => this.setState({username:newValue})}
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
             <RaisedButton onClick = {this.LoginClick} className = {signup.submit} label="Sign up" primary={true}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
    }
}
export default SignUp;