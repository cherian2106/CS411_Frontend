import React, { Component } from 'react'
// import { Card, Icon, Image } from 'semantic-ui-react/semantic.min'
import { Card, Button } from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UpdateForm from './UpdateForm';
import Axios from 'axios';
import Comment from '../src/components/Comment/comment.js'
// import 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min';

class ViewStartup extends Component
{
  constructor(props){
    super(props)
    this.state={
      id : props.match.params.id,
      result: {},
      // elems : {},
      isEditing: false,
      update_name: "",
      update_category: "",
      update_launch_data: "",
      update_location: "",
      update_money_raised: ""
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }


  handleEdit = () => {
    this.setState({isEditing: true})
  }
  handleDelete = () => {
    // console.log(this.state.id);
    var url = `https://backendvaradk2.herokuapp.com/startups/${this.state.id}`
    Axios.delete(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentWillMount = () =>{
    // console.log(this.props.location.state.elems);
    // this.setState({elems: this.props.location.state.elems});
    var url = `https://backendvaradk2.herokuapp.com/startups/${this.state.id}`;
    // console.log(url);
    Axios.get(url)
        .then((res) => {
            this.setState({result: res.data[0]});
            console.log(this.state.result);
        })
        .catch((error) => {
          console.log(error);
        })
  }

  render() {
    if (this.state.isEditing) {
      return (
        <UpdateForm result = {this.state.result}/>
      )
    }
    return(
      <div className="CardContainer">
            <Link to={process.env.PUBLIC_URL+'/search'}>
              <Button className="ui button"> Back To Search </Button>
            </Link>
            <div className="ui centered card">
                <p> startUp Name: {this.state.result.Name}</p>
                <Card>
                  <Image src =  ''/>
                  <Card.Content>
                      <Card.Header>StartUp name: {this.state.result.Name} </Card.Header>
                      <Card.Meta></Card.Meta>
                      <Card.Description></Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <p>
                      <Icon name='user' />
                        Category: {this.state.result.Category} <br></br>
                        Launch date: {this.state.result.Launch_date} <br></br>
                        Location: {this.state.result.Location} <br></br>
                        Money raised: {this.state.result.Money_raised} <br></br>
                      </p>
                  </Card.Content>
                </Card>
                <button onClick = {this.handleEdit} className="ui button">Edit</button>
            </div>
            <Comment></Comment>
      </div>
    )
  }
}
export default ViewStartup
