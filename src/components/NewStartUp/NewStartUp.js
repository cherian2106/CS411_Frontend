import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import axios from 'axios'
// import Sugg from './Sugg';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import newstartup from './NewStartUp.module.scss';
import styles from './robot.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

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
            Launch_date: this.state.launch_date,
            UserID: this.props.match.params.uid
        }
        // console.log(update);
        var url = `https://backendvaradk2.herokuapp.com/startups`;
        // console.log(url);
        Axios.post(url, update)
        .then((res) => {
          console.log(res);
          var startupid = res.data.insertId;
          window.location.href = process.env.PUBLIC_URL+`/startups/${startupid}`+"/"+this.props.match.params.uid;
        })
        .catch((err) => {
          console.log(err);
        })
    }

      render(){
        // console.log(this.props.match.params.uid);
    return(

    <div className = {newstartup.main}>
        <MuiThemeProvider>
        <Link to={process.env.PUBLIC_URL+'/search/'+this.props.match.params.uid}>
              <Button className="ui button"> Back To Search </Button>
              
          </Link>
          <div className = {newstartup.text}>
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
             <br/>
             <RaisedButton onClick = {this.NewStartUp} label="Create" primary={true}/>
         </div>
         </MuiThemeProvider>
        

         <div class="robots">
            <div class="android"> 
              <div class="head"> 
                <div class="eyes"> 
                  <div class="left_eye"></div> 
                  <div class="right_eye"></div>
                </div> 
              </div> 
              <div class="upper_body"> 
                <div class="left_arm"></div> 
                <div class="torso"></div> 
                <div class="right_arm"></div> 
              </div> 
              <div class="lower_body"> 
                <div class="left_leg"></div> 
                <div class="right_leg"></div> 
              </div> 
            </div>
          </div>
    </div>
    
    );
  }

}

export default NewStartUp
