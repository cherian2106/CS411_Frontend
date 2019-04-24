import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css'


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
  const res = auth.signInWithEmailAndPassword(this.state.username, this.state.password)
  res.catch(e => console.log(e.message))
}

render() {
    return (
      <div className = 'innerContain'>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             className = "Username"
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               className = "Password"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton onClick = {this.LoginClick} className = "Submit" label="Submit" primary={true} style={style}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;


// import React, { Component } from 'react';
// import { Form,Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import './LoginPage.css'
// import 'react-bootstrap/dist/react-bootstrap';

// class Login extends Component {
//     render() {
//       return (
        
//       )}
// }

// export default Login;


{/* <div className='loginContainer'>
        {/* <label>UserName</label>
        <input
        className = "UserName"
        placeholder="Enter your Username"
        type="text"
        ref={input => this.UserName = input}
        />
        <label>Password</label>
        <input
        className = "Password"
        placeholder="Enter your Password"
        type="text"
        ref={input => this.Password = input}
        /> 
        <Form className='loginContainer'>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
         <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>;
        </div> 
      */}
