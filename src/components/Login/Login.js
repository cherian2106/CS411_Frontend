import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import firebase from 'firebase';
import login from './Login.module.scss'


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 LoginClick = () =>{
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
  const res = auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return auth.signInWithEmailAndPassword(this.state.username, this.state.password)
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
  
  res.then(window.location.href = process.env.PUBLIC_URL+"/Search").catch(e => console.log(e.message))
}

render() {
    return (
      <div className = {login.innerContain}>
        <MuiThemeProvider>
          <div>
            <TextField
             className = {login.user}
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
             <TextField
               className = {login.password}
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
               <br/>
             <RaisedButton onClick = {this.LoginClick} className = {login.submit} label="Login" primary={true}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
export default Login;