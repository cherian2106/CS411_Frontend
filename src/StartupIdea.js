import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import axios from 'axios'
// import Sugg from './Sugg';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import { Dropdown , Card, Button } from 'semantic-ui-react';


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


class StartupIdea extends Component
{
    constructor() {
        super();
        this.state = {
          name: "",
          backers : 0,
          month: "",
          country: "",
          money_raised: 0
        };
      }

      predictStartUp = () => {
        // console.log(update);
        var url = `https://advanced-functionality-cs498.herokuapp.com/predict?category=`+ this.state.category.value+
        '&month='+this.state.month+'&backers='+this.state.backers+'&country='+this.state.country;
        Axios.get(url)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }

      render(){
        // console.log(this.props.match.params.uid);
    return(

    <div >
        <MuiThemeProvider>
        {/* <Link to={process.env.PUBLIC_URL+'/search/'+this.props.match.params.uid}>
              <Button className="ui button"> Back To Search </Button> */}
              
          {/* </Link> */}
          <div >
            <TextField
            //  className = {signup.user}
             hintText="Enter Startup Idea name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
              <Dropdown
                placeholder='Select Category'
                fluid
                selection
                options={friendOptions}
                onChange = {(event,newValue) => this.setState({category:newValue})}
              />
             <TextField
              //  className = {signup.password}
               hintText="Enter Backers If any"
               floatingLabelText="Number of Backers"
               onChange = {(event,newValue) => this.setState({backers:newValue})}
               />
             <br/>
             <TextField
              //  className = {signup.password}
               hintText="Enter Month"
               floatingLabelText="Month"
               onChange = {(event,newValue) => this.setState({month:newValue})}
               />
             <br/>
             <TextField
              //  className = {signup.password}
               hintText="Enter Country"
               floatingLabelText="Country"
               onChange = {(event,newValue) => this.setState({country:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter Money raised"
               floatingLabelText="Money Raised"
               onChange = {(event,newValue) => this.setState({money_raised:newValue})}
               />
             <br/>

             <RaisedButton onClick = {this.predictStartUp} label="Create" primary={true}/>
         </div>
         </MuiThemeProvider>
    </div>
    
    );
  }

}

export default StartupIdea
