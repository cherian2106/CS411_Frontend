import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import feedcard from './FeedCard.module.scss'
// import UpdateForm from '../../UpdateForm';
import Axios from 'axios';
import UpdateForm from '../../UpdateForm.js'
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
    // var url = `https://backendvaradk2.herokuapp.com/startups/${this.state.id}`
    // if(this.state.elems.UserID == this.props.match.params.uid){
    // this.setState({isEditing: true})
    // }
    // else{
    //   window.alert("Unable to edit: Not your startup")
    // }
    this.setState({isEditing: true})

  }

  componentWillMount = () =>{
    this.setState({elems: this.props.elems});
  }

  render() {
    console.log(this.props);
    if (this.state.isEditing) {
      return (
        <UpdateForm result = {this.state.elems}/>
      )
    }
    return(
        <div className={feedcard.CardContainer}>
          <img onClick = {this.handleEdit} className = {feedcard.edit} src = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_mode_edit_48px-512.png'></img>
          {/* <Link to={process.env.PUBLIC_URL+'/search'}><button className="ui button">Back To Search</button></Link> */}
          <div className="ui centered card">
            <p> startUp Name: {this.state.elems.Name}</p>
            <Card>
              <Image src =  ''/>
              <Card.Content>
                  <Card.Header>StartUp name: {this.state.elems.Name} </Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description></Card.Description>
              </Card.Content>
              <Card.Content extra>
                  <p>
                  <Icon name='user' />
                    Category: {this.state.elems.Category} <br></br>
                    Launch date: {this.state.elems.Launch_date} <br></br>
                    Location: {this.state.elems.Location} <br></br>
                    Money raised: {this.state.elems.Money_raised} <br></br>
                  </p>
              </Card.Content>
            </Card>
          </div>
        </div>
    )
  }
}
export default Feed