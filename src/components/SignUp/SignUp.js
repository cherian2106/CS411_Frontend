import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import signup from './SignUp.module.scss'
import Auth from '../../config.js'
import Axios from 'axios'
class SignUp extends Component {

    constructor(){
      super();
        this.state = {
            email:'',
            password:'',
            userId: '',
            username: '',
            age: '',
            location: '',
            occupation: ''
        }
        this.SignUpClick = this.SignUpClick.bind(this);
    }
  // resetComponent = () => this.setState({ email: false, results: [], value: '' })

SignUpClick = () => {
    console.log(this.state.email)
    console.log(this.state.password)
    Auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((result) => { 
        var update = {
          UserID: result.user.uid,
          Name: this.state.username,
          Email_id: this.state.email,
          Location: this.state.location,
          Occupation: this.state.occupation,
          Age: this.state.age
        }

        var url = `https://backendvaradk2.herokuapp.com/users`;
        Axios.post(url, update)
        .then((res) => {
          console.log("reacheed post success")
          console.log(res)
        })
        .catch((err) => {
          console.log("err here in post");
        });
      window.alert("Sign Up Successful");
      window.location.href = process.env.PUBLIC_URL;
    })
    .catch(function(err){
      console.log(err)
      window.alert(err.code);
    });
}

    render() {
      return (
        <div className = "FormContainer">
        <MuiThemeProvider>
          <div>
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
            <TextField
             className = {signup.username}
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({username:newValue})}
            />
           <br/>
           <TextField
             className = {signup.age}
             hintText="Enter your Age"
             floatingLabelText="Age"
             onChange = {(event,newValue) => this.setState({age:newValue})}
            />
           <br/>
           <TextField
               className = {signup.location}
               hintText="Enter your location"
               floatingLabelText="Location"
               onChange = {(event,newValue) => this.setState({location:newValue})}
            />
            <br/>
            <TextField
              className = {signup.occupation}
              hintText="Enter your Occupation"
              floatingLabelText="Occupation"
              onChange = {(event,newValue) => this.setState({occupation:newValue})}
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