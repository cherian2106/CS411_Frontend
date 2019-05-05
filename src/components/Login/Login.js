import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import firebase from 'firebase';
import login from './Login.module.scss'
import Auth from '../../config.js'


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 LoginClick = () =>{
  Auth.signInWithEmailAndPassword(this.state.username, this.state.password)
  .then(function(result) {
    console.log(result)
    window.location.href = process.env.PUBLIC_URL+"/search/"+result.user.uid;
  })
  .catch(function(err){
    window.alert(err.code);
  });
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
               &nbsp;
             <RaisedButton onClick = {this.LoginClick} className = {login.submit} label="Login" primary={true}/>
           
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
export default Login;