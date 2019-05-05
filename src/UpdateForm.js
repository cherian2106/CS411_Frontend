import React, { Component } from 'react'
// import axios from 'axios'
// import Sugg from './Sugg';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
      // console.log(url);
      Axios.put(url, update)
      .then((res) => {
        console.log(res);
        window.location.href = process.env.PUBLIC_URL+`/startups/${this.props.result.StartupID}`;
      })
      .catch((err) => {
        console.log(err);
      })
  }

    render() {
      // console.log(this.props);
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
           <TextField
              //  className = {signup.username}
               hintText="Enter Category"
               floatingLabelText="Category"
               value = {this.state.update_category}
               onChange = {(event,newValue) => this.setState({update_category:newValue})}
               />
            <br/>
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
