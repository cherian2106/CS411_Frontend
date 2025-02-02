import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Dropdown , Card, Button } from 'semantic-ui-react';
import startupidea from './StartupIdea.module.scss'
import { Link } from 'react-router-dom';

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



const monthOptions = [
  {
    key: 'January',
    text: 'January',
    value: 1,
  },
  {
    key: 'Feburary',
    text: 'Feburary',
    value: 2,
  },
  {
    key: 'March',
    text: 'March',
    value: 3,
  },
  {
    key: 'April',
    text: 'April',
    value: 4,
  },
  {
    key: 'May',
    text: 'May',
    value: 5,
  },
  {
    key: 'June',
    text: 'June',
    value: 6,
  },
  {
    key: 'July',
    text: 'July',
    value: 7,
  },
  {
    key: 'August',
    text: 'August',
    value: 8,
  },
  {
    key: 'September',
    text: 'September',
    value: 9,
  },
  {
    key: 'October',
    text: 'October',
    value: 10,
  },
  {
    key: 'November',
    text: 'November',
    value: 11,
  },
  {
    key: 'December',
    text: 'December',
    value: 12,
  }
]

const countryOptions = [
  {
    key: 'USA/CA',
    text: 'USA/CA',
    value: 1,
  },
  {
    key: 'Other',
    text: 'Other',
    value: 0,
  }
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
          money_raised: 0,
          imgbase: ""
        };
      }

      predictStartUp = () => {
        var url = `https://advanced-functionality-cs498.herokuapp.com/predict?category=`+ this.state.category.value+
        '&month='+this.state.month.value+'&backers='
        +this.state.backers+'&country='+this.state.country.value
        +'&money_raised='+this.state.money_raised;
        Axios.get(url)
        .then((res) => {
          console.log(res);
          this.setState({imgbase: "data:image/png;base64,"+res.data});
          console.log(this.state.imgbase);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    clear_graph = () => {
      var url = `https://advanced-functionality-cs498.herokuapp.com/predict_delete`;
      Axios.get(url).then((res) => {console.log(res)}).catch((err) => {console.log(err)});
    }

  render(){
    return(
    <div className = {startupidea.imgcont}><Link to={process.env.PUBLIC_URL+'/search/'+this.props.match.params.uid}>
         <Button className="ui button"> Back To Search </Button>
          </Link>
    <div className = {startupidea.cont}>
        <MuiThemeProvider>
          <div >
            <TextField
             hintText="Enter Startup Idea name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           <div className = {startupidea.dropdown}>
              <Dropdown
                placeholder='Select Category'
                fluid
                selection
                options={friendOptions}
                onChange = {(event,newValue) => this.setState({category:newValue})}
              />
            </div >
             <TextField
               hintText="Enter Backers If any"
               floatingLabelText="Number of Backers"
               onChange = {(event,newValue) => this.setState({backers:newValue})}
               />
             <br/>
             <div className = {startupidea.dropdown}>
             <Dropdown
             
             placeholder='Select Month Of StartUp Deployment'
             fluid
             selection
             options={monthOptions}
             onChange = {(event,newValue) => this.setState({month:newValue})}
           />
           </div>
           <div className = {startupidea.dropdown}>
             <Dropdown
             
             placeholder='Select Country Of StartUp'
             fluid
             selection
             options={countryOptions}
             onChange = {(event,newValue) => this.setState({country:newValue})}
           />
           </div>
             <TextField
               hintText="Enter Money raised"
               floatingLabelText="Money Raised"
               onChange = {(event,newValue) => this.setState({money_raised:newValue})}
               />
             <br/>

             <RaisedButton onClick = {this.predictStartUp} label="PREDICT" primary={true}/>
             <RaisedButton onClick = {this.clear_graph} label="CLEAR GRAPH" primary={true}/>
         </div>
         <img src = {this.state.imgbase}></img>
         </MuiThemeProvider>
    </div>
    </div>
    
    );
  }

}

export default StartupIdea
