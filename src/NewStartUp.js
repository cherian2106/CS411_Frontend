import React, { Component } from 'react'
// import axios from 'axios'
// import Sugg from './Sugg';
// import { Link } from 'react-router-dom';
import Axios from 'axios';

class NewStartUp extends Component
{
    constructor() {
        super();
        this.state = {
          pokemon: []
        };
      }

    sendPost = () => {
        var update = {
            Name: this.name.value,
            Category: this.category.value,
            Money_raised: this.money_raised.value,
            Location: this.location.value
        }
        var url = `http://localhost:4000/startups`;
        // console.log(url);
        Axios.post(url, update)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }

      render(){
    return(
    <div>
      <div className="NameContain">
          <br></br>
          <label className = "Search_Label">Name</label>
            <input
            className = "Name"
            placeholder="Name"
            type="text"
            ref={input => this.name = input}
            />
      </div>
      <div className="NameContain">
          <br></br>
          <label className = "Search_Label">Category</label>
            <input
            className = "Name"
            placeholder="Name"
            type="text"
            ref={input => this.category = input}
            />
      </div>
      <div className="NameContain">
          <br></br>
          <label className = "Search_Label">Money raised</label>
            <input
            className = "Name"
            placeholder="Name"
            type="text"
            ref={input => this.money_raised = input}
            />
      </div>
      <div className="NameContain">
          <br></br>
          <label className = "Search_Label">Location</label>
            <input
            className = "Name"
            placeholder="Name"
            type="text"
            ref={input => this.location = input}
            />
      </div>
      <button className="ui button" onClick={this.sendPost}>Post</button>
    </div>
    );
  }

}

export default NewStartUp
