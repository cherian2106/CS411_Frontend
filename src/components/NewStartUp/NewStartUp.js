import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import newstartup from './NewStartUp.module.scss';
import styles from './robot.css';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';

const friendOptions = [
  {
    key: 'Art',
    text: 'Art',
    value: 'Art',
  },
  {
    key: 'Comics',
    text: 'Comics',
    value: 'Comics',
  },
  {
    key: 'Crafts',
    text: 'Crafts',
    value: 'Crafts',
  },
  {
    key: 'Dance',
    text: 'Dance',
    value: 'Dance',
  },
  {
    key: 'Design',
    text: 'Design',
    value: 'Design',
  },
  {
    key: 'Fashion',
    text: 'Fashion',
    value: 'Fashion',
  },
  {
    key: 'Film & Video',
    text: 'Film & Video',
    value: 'Film & Video',
  },
  {
    key: 'Food',
    text: 'Food',
    value: 'Food',
  },
  {
    key: 'Games',
    text: 'Games',
    value: 'Games',
  },
  {
    key: 'Journalism',
    text: 'Journalism',
    value: 'Journalism',
  },
  {
    key: 'Music',
    text: 'Music',
    value: 'Music',
  },
  {
    key: 'Photography',
    text: 'Photography',
    value: 'Photography',
  },
  {
    key: 'Publishing',
    text: 'Publishing',
    value: 'Publishing',
  },
  {
    key: 'Technology',
    text: 'Technology',
    value: 'Technology',
  },
  {
    key: 'Theater',
    text: 'Theater',
    value: 'Theater',
  },
]

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
            Category: this.state.category.value,
            Location: this.state.location,
            Money_raised: this.state.money_raised,
            Launch_date: this.state.launch_date,
            UserID: this.props.match.params.uid
        }
        var url = `https://backendvaradk2.herokuapp.com/startups`;
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
           <div className = {newstartup.dropdown}>
              <Dropdown
                placeholder='Select Category'
                fluid
                selection
                options={friendOptions}
                onChange = {(event,newValue) => this.setState({category:newValue})}
              />
            </div >
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
