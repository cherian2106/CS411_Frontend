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
          name: "",
          category : "",
          money_raised: "",
          location: "",
          launch_date: ""
        };
      }

      NewStartUp = () => {
        var update = {
            Name: this.state.name,
            Category: this.state.category,
            Location: this.state.location,
            Money_raised: this.state.money_raised,
            Launch_date: this.state.launch_date
        }
        console.log(update);
        var url = `https://backendvaradk2.herokuapp.com/startups`;
        console.log(url);
        Axios.post(url, update)
        .then((res) => {
          console.log(res);
          var startupid = res.data.insertId;
          window.location.href = process.env.PUBLIC_URL+`/startups/${startupid}`;
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
               onChange = {(event,newValue) => this.setState({category:newValue})}
               />
            <br/>
             <TextField
              //  className = {signup.password}
               hintText="Enter Money Raised"
               floatingLabelText="Money Raised"
               onChange = {(event,newValue) => this.setState({money_raised:newValue})}
               />
             <br/>
             <TextField
              //  className = {signup.password}
               hintText="Enter Location"
               floatingLabelText="Location"
               onChange = {(event,newValue) => this.setState({location:newValue})}
               />
             <br/>
             <TextField
              //  className = {signup.password}
               hintText="YYYY-MM-DD"
               floatingLabelText="Launch Date"
               onChange = {(event,newValue) => this.setState({launch_date:newValue})}
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
