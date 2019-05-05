import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import axios from 'axios'
// import Sugg from './Sugg';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NewStartUp extends Component
{
    constructor() {
        super();
        this.state = {
          pokemon: []
        };
      }

    sendPost = () => {
        var update = {
            Name: this.name.value,
            Category: this.category.value,
            Money_raised: this.money_raised.value,
            Location: this.location.value
        }
        var url = `https://backendvaradk2.herokuapp.com/startups`;
        // console.log(url);
        Axios.post(url, update)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }

      render(){
    return(
    <div>
        <MuiThemeProvider>
          <div>
            <TextField
            //  className = {signup.user}
             hintText="Enter Startup name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           <TextField
              //  className = {signup.username}
               hintText="Enter Category"
               floatingLabelText="Category"
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
            <br/>
             <TextField
              //  className = {signup.password}
               hintText="Enter Money Raised"
               floatingLabelText="Money Raised"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <TextField
              //  className = {signup.password}
               hintText="Enter Location"
               floatingLabelText="Location"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <TextField
              //  className = {signup.password}
               hintText="YYYY-MM-DD"
               floatingLabelText="Launch Date"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton onClick = {this.NewStartUp} label="Sign up" primary={true}/>
         </div>
         </MuiThemeProvider>
    </div>
    );
  }

}

export default NewStartUp
