import React, { Component } from 'react';
import axios from 'axios';
import Sugg from '../Sugg/Sugg';
import { Button, Input } from 'semantic-ui-react';
// import NewStartUp from '../../NewStartUp';
import { Link } from 'react-router-dom';
import startupidea from './StartUpIdeaFE.module.scss'
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
        this.handleRef = this.handleRef.bind(this);
    }
    handleRef = component => (this.inputRef = component);

    handleChange = () => {
        var url = `https://backendvaradk2.herokuapp.com/startups?name="${this.inputRef.focus()}"`;
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
            {/* <label className = {startupidea.search}>Startup Search</label> */}
            {/* <input
            className = {startupidea.searchform}
            placeholder="Search for Startups here..."
            type="text"
            name="Search Bar"
            ref={input => this.search = input}
            /> */}
            <Input
                name = "search"
                placeholder="Search for Startups here..."
                type = "text"
                name="Search Bar"
                // ref = {input => this.search = input}
                ref={this.handleRef}
            />
            <Button onClick={this.handleChange}> Go </Button>
            <Link to={process.env.PUBLIC_URL+'/create'}>
                <Button className={startupidea.ui}> Create StartUp </Button>
            </Link>
            {/* <div>
                <Sugg value = {this.state.SearchResults}/>
            </div> */}
                {/* <div><NewStartUp/> </div> */}
        </div>);
    }
}
export default StartUpIdeaFE;