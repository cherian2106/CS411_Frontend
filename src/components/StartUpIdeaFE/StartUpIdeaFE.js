import React, { Component } from 'react';
import axios from 'axios';
import Sugg from '../Sugg/Sugg';
import NewStartUp from '../../NewStartUp';
import { Link } from 'react-router-dom';
import './StartUpIdeaFE.module.scss'
// import { Link } from 'react-router-dom';

class StartUpIdeaFE extends Component
{
    constructor() 
    {
        super();
    
        this.state ={
          SearchResults: []
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
        var url = `https://backendvaradk2.herokuapp.com/startups?name="${this.search.value}"`;
        console.log(url);
        this.setState({SearchResults: [{id: 1, title: "Hi"}]});
        axios.get(url)
        .then((res) => {
            this.setState({SearchResults: res.data});
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render()
    {return(
        <div>
            <label className = "StartupSearch">Startup Search</label>
                <input
                className = "StartupSearchForm"
                placeholder="Search for Startups here..."
                type="text"
                name="Search Bar"
                ref={input => this.search = input}
                />
                <button onClick={this.handleChange}>Go</button>
                <Link to={process.env.PUBLIC_URL+'/create'}><button className="ui button">Create StartUp</button></Link>
                <div><Sugg value = {this.state.SearchResults}/></div>
                {/* <div><NewStartUp/> </div> */}
        </div>);
    }
}
export default StartUpIdeaFE;