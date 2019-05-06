import React, { Component } from 'react'
import Axios from 'axios'
import mystartup from './MyStartups.module.scss'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MySU from '../MySU/MySU.js'


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
        const Startups = ({results}) => {
            return (
                <ul className = {mystartup.feedul}>
                {results.map(result => (
                    <li className = {mystartup.feedli} key = {result.StartupID}>
                        <MySU elems = {result}/>
                    </li>
                ))}
                </ul>
            )};
            return(
                <div className = {mystartup.cont}>
                    <Link to={process.env.PUBLIC_URL+'/search/'+this.props.match.params.uid}>
                        <Button className="ui button"> Back To Search </Button>
                    </Link>
                    <div className = {mystartup.display}>
                      You have {this.state.result.length} startups!
                    </div>
                    <Startups results = {this.state.result}/>
                </div>
            );
    }
}

export default NewStartUp
