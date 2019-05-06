import React, { Component } from 'react'
import Axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Dropdown , Card, Button } from 'semantic-ui-react';
import updateform from './UpdateForm.module.scss';

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

class UpdateForm extends Component
{
  constructor(props) {
      super(props);
      this.state = {
        update_name: this.props.result.Name,
        update_category: this.props.result.Category,
        update_launch_data: this.props.result.Launch_date,
        update_location: this.props.result.Location,
        update_money_raised: this.props.result.Money_raised
      };
  }

  handleEditSubmit = () => {
    console.log("reached submit");
    var update = {
        Name: this.state.update_name,
        Category: this.state.update_category,
        Money_raised: this.state.update_money_raised,
        Location: this.state.update_location,
        Launch_date: this.state.update_launch_data
      }
      var url = `https://backendvaradk2.herokuapp.com/startups/${this.props.result.StartupID}`;
      Axios.put(url, update)
      .then((res) => {
        console.log(res);
        window.location.href = process.env.PUBLIC_URL+`/mystartups/${this.props.result.UserID}`;
      })
      .catch((err) => {
        console.log(err);
      })
  }

    render() {
      return(
        <div>
          <MuiThemeProvider>
          <div>
            <TextField
            //  className = {signup.user}
             hintText="Enter Startup name"
             floatingLabelText="Name"
             value = {this.state.update_name}
             onChange = {(event,newValue) => this.setState({update_name:newValue})}
             fullWidth
            //  style = {{width: 100}}
             />
           <br/>
           <div className={updateform.dropdown}>
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
               value = {this.state.update_money_raised}
               onChange = {(event,newValue) => this.setState({update_money_raised:newValue})}
               />
             <br/>
             <TextField
              //  className = {signup.password}
               hintText="Enter Location"
               floatingLabelText="Location"
               value= {this.state.update_location}
               onChange = {(event,newValue) => this.setState({update_location:newValue})}
               />
             <br/>
             <TextField
              //  className = {signup.password}
               hintText="YYYY-MM-DD"
               floatingLabelText="Launch Date"
               value= {this.state.update_launch_data}
               onChange = {(event,newValue) => this.setState({update_launch_data:newValue})}
               />
             <br/>
             <RaisedButton onClick = {this.handleEditSubmit} label="SUBMIT" primary={true}/>
         </div>
        </MuiThemeProvider>
      </div>
    );
}

}

export default UpdateForm
