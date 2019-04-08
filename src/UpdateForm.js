import React, { Component } from 'react'
// import axios from 'axios'
// import Sugg from './Sugg';
// import { Link } from 'react-router-dom';
import Axios from 'axios';

class UpdateForm extends Component
{
    constructor() {
        super();
    
        this.state = {
          pokemon: []
        };
      }

    sendPut = () => {
        var update = {
            Name: this.name.value,
            Category: this.category.value,
            Money_raised: this.money_raised.value,
            Location: this.location.value
        }
        var url = `https://backendvaradk2.herokuapp.com/startups/${this.props.id}`;
        // console.log(url);
        Axios.put(url, update)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }

      render()
  {
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
      <button className="ui button" onClick={this.sendPut}>Update</button>
    </div>
    );
  }

}

export default UpdateForm
