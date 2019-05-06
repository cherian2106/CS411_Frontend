import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import UpdateForm from '../../UpdateForm.js';
import Axios from 'axios';
import Comment from '../Comment/comment.js'
import viewstartup from './ViewStartup.module.scss'

class ViewStartup extends Component
{
  constructor(props){
    super(props)
    this.state={
      id : props.match.params.id,
      result: {},
      comments: [],
      newComment: '',
      update_name: "",
      update_category: "",
      update_launch_data: "",
      update_location: "",
      update_money_raised: ""
    }
  }


  componentWillMount = () =>{
    // this.setState({elems: this.props.location.state.elems});
    var url = `https://backendvaradk2.herokuapp.com/startups/${this.state.id}`;
    Axios.get(url)
        .then((res) => {
            this.setState({result: res.data[0]});
        })
        .catch((error) => {
        })

    var url = `http://localhost:4000/comments/${this.state.id}`
    Axios.get(url)
    .then((res) => {
        this.setState({comments: res.data});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  Comment_Post = () => {
    var url = `https://backendvaradk2.herokuapp.com/comments`;
    console.log(url)
    console.log(this.state.newComment.value)
    var update = {
      StartupID : this.props.match.params.id,
      UserID : this.props.match.params.uid,
      Comment : this.state.newComment.value,
      Date : new Date
  }
    Axios.post(url, update)
    .then((res) => {
      window.location.href = process.env.PUBLIC_URL+"/startups/"+this.state.id + '/' + this.props.match.params.uid;
    })
  }

  render() {
    const Comments = ({results}) => {
    return (<ul >
      {results.map(result => (
          <li key = {result.CommentID}>
              <Comment comment = {result} curr_user = {this.props.match.params.uid}/>
          </li>
      ))}
    </ul>
    )};
    return(
      <div className={viewstartup.container}>
        <Link to={process.env.PUBLIC_URL+'/search/'+this.props.match.params.uid}>
          <img className = {viewstartup.back} src = 'https://cdn3.iconfinder.com/data/icons/line/36/arrow_left-512.png'></img>
        </Link>
        {/* <img onClick = {this.handleEdit} class = 'edit' src = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_mode_edit_48px-512.png'></img> */}
        <div className= {viewstartup.card}>
        <div className = {viewstartup.NameHead}>{this.state.result.Name}</div>
        <div className = {viewstartup.author1}>By: {this.state.result.User_name} </div>
          <div className= {viewstartup.box}>
            <img className = {viewstartup.img} src = 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'></img>
              <div className = {viewstartup.date}>{this.state.result.Launch_date}  </div>
              <p>
                Category: {this.state.result.Category} <br></br>
                Location: {this.state.result.Location} <br></br>
                Amount Raised: ${this.state.result.Money_raised} <br></br>
              </p>
            </div>
        </div>
        <Comments results = {this.state.comments}></Comments>
        <Form className = {viewstartup.comment_form} >
        <Form.TextArea onChange = {(event,newValue) => this.setState({newComment:newValue})} />
        <Button onClick = {this.Comment_Post} content='Add Comment' labelPosition='left' icon='edit' primary />
        </Form>
      </div>
    )
  }
}
export default ViewStartup