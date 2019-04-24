import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import firebase from 'firebase';
  
class SignUp extends Component {

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
    const res = auth.createUserWithEmailAndPassword(this.UserName.value, this.password.value)
    res.catch(e => console.log(e.message))
}

    render() {
      return (
        <div className = "FormContainer">
            <div className="NameContain">
                <br></br>
                <label className = "Search_Label">Name</label>
                <input
                className = "Name"
                placeholder="Name"
                type="text"
                ref={input => this.UserName = input}
                />
            </div>
            <div className="NameContain">
                <br></br>
                <label className = "Search_Label">Category</label>
                <input
                className = "Name"
                placeholder="Name"
                type="text"
                ref={input => this.password = input}
                />
            </div>
            <div className="NameContain">
                <br></br>
                <label className = "Search_Label">Money raised</label>
                <input
                className = "Name"
                placeholder="Name"
                type="text"
                ref={input => this.money_raised = input}
                />
            </div>
            <div className="NameContain">
                <br></br>
                <label className = "Search_Label">Location</label>
                <input
                className = "Name"
                placeholder="Name"
                type="text"
                ref={input => this.location = input}
                />
            </div>
            <button onClick = {this.SignUpClick} className = "Submit_SU" primary={true} style={style}>Submit</button>
        </div>
      )
    }
}
const style = {
    margin: 15,
   };
export default SignUp;