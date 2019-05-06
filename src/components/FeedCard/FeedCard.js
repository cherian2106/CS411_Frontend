import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import feedcard from './FeedCard.module.scss'
// import UpdateForm from '../../UpdateForm';
import Axios from 'axios';
import UpdateForm from '../../UpdateForm.js'
import { RaisedButton } from 'material-ui';
import { Button } from 'semantic-ui-react';

// import 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min';


class Feed extends Component
{
  constructor(props){
    super(props)
    this.state={
      elems : {},
      isEditing: false,
    }
  }

  handleEdit = () => {
    this.setState({isEditing: true})

  }

  componentWillMount = () =>{
    this.setState({elems: this.props.elems});
  }

  render() {
    // console.log(this.props.mine);
    if (this.props.mine === "yes") {
      if (this.state.isEditing) {
        return (
          <UpdateForm result = {this.state.elems}/>
        )
      }
      return(
        <div className={feedcard.container}>
          <div className="card">
            <p> startUp Name: {this.state.elems.Name}</p>
                  <p>
                  
                    Category: {this.state.elems.Category} <br></br>
                    Launch date: {this.state.elems.Launch_date} <br></br>
                    Location: {this.state.elems.Location} <br></br>
                    Money raised: {this.state.elems.Money_raised} <br></br>
                  </p>
           
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={feedcard.container}>
          <div className="card">
            <div className={feedcard.title}> {this.state.elems.Name}</div>
            <img className = {feedcard.img} src = 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'></img>
                 
                  <p>
                    Category: {this.state.elems.Category} <br></br>
                    Launch date: {this.state.elems.Launch_date} <br></br>
                    Location: {this.state.elems.Location} <br></br>
                    Amount Raised: {this.state.elems.Money_raised} <br></br>
                  </p>

                  
           
          </div>
        </div>
      )
    }
  }
}
export default Feed