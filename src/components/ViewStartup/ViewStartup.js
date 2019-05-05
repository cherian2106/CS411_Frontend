import React, { Component } from 'react'
// import { Card, Icon, Image } from 'semantic-ui-react/semantic.min'
import { Card, Button } from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UpdateForm from '../../UpdateForm.js';
import Axios from 'axios';
import Comment from '../Comment/comment.js'
import viewstartup from './ViewStartup.scss'


// import 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min';

class ViewStartup extends Component
{
  constructor(props){
    super(props)
    this.state={
      id : props.match.params.id,
      result: {},
      comments: [],
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
    var url = `https://backendvaradk2.herokuapp.com/startups/${this.state.id}`
    if(this.state.result.UserID == this.props.match.params.id){
    this.setState({isEditing: true})
    }
    else{
      window.alert("Unable to edit: Not your startup")
    }
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

    var url = `https://backendvaradk2.herokuapp.com/comments/${this.state.id}`
    Axios.get(url)
    .then((res) => {
        this.setState({comments: res.data});
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
    const Comments = ({results}) => {
      // console.log(results);
    return (<ul >
      {results.map(result => (
          <li key = {result.CommentID}>
              <Comment comment = {result}/>
          </li>
      ))}
    </ul>
    )};
    return(
      <div className="container">
            <Link to={process.env.PUBLIC_URL+'/search/'+this.props.match.params.uid}>
              <img class = 'back' src = 'https://cdn3.iconfinder.com/data/icons/line/36/arrow_left-512.png'></img>
            </Link>
          
            <img onClick = {this.handleEdit} class = 'edit' src = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_mode_edit_48px-512.png'></img>
            
            <div className="card">
            <div class = "NameHead">{this.state.result.Name}</div>
            <div class = 'author1'>By: {this.state.result.UserID} </div>
            
                    

                    <div class="box">
                      <img class = 'img' src = 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'></img>
                        <div class = 'date'>{this.state.result.Launch_date}  </div>
                        
                        <p>
                          Category: {this.state.result.Category} <br></br>
                          Location: {this.state.result.Location} <br></br>
                          Amount Raised: ${this.state.result.Money_raised} <br></br>
                          
                        </p>
                      </div>
                  
               
            </div>
            <Comments results = {this.state.comments}></Comments>
      </div>
    )
  }
}
export default ViewStartup
