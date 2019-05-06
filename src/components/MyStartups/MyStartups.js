import React, { Component } from 'react'
import Axios from 'axios'
import mystartup from './MyStartups.module.scss'
import FeedCard from '../FeedCard/FeedCard.js'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


class NewStartUp extends Component
{
    constructor() {
        super();
        this.state = {
          result: []
        };
    }

    componentWillMount() {
        var url = `https://backendvaradk2.herokuapp.com/startups?uid="${this.props.match.params.uid}"`;
        // console.log(url);
        Axios.get(url)
        .then((res) => {
            this.setState({result: res.data});
            console.log(this.state.result);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    render(){
        console.log(this.props.match);
        const Feed = ({results}) => {
            console.log(results);
            return (
                <ul className = {mystartup.feedul}>
                {results.map(result => (
                    <li className = {mystartup.feedli} key = {result.StartupID}>
                        <FeedCard elems = {result}  mine = "yes"/>
                    </li>
                ))}
                </ul>
            )};
        // if (this.state.result.length !== 0) {
            return(
                <div className = {mystartup.cont}>
                    <Link to={process.env.PUBLIC_URL+'/search/'+this.props.match.params.uid}>
                        <Button className="ui button"> Back To Search </Button>
                    </Link>
                    <h3> You have {this.state.result.length} startups! </h3>
                    <Feed results = {this.state.result}/>
                </div>
            );
    }
}

export default NewStartUp
