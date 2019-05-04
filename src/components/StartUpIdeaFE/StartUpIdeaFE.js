import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash'
import { Search, Grid, Button, Menu, Header, Segment } from 'semantic-ui-react'
import FeedCard from '../FeedCard/FeedCard';
import firebase from 'firebase';
import startupidea from './StartUpIdeaFE.module.scss'

class StartUpIdeaFE extends Component {
constructor()
  {
        super();
        this.state ={
            isLoading: false,
            results: [],
            value: '',
            // ans: {},
            curr_iter: 0
        };
        this.Logout = this.Logout.bind(this);

  }

 Logout = () => {
   console.log("reached")
  let config = {
    apiKey: "AIzaSyBaoiWVV8vuD8uiRI3AiFEvC3xCs8m2MTY",
    authDomain: "cs411-c57f9.firebaseapp.com",
    databaseURL: "https://cs411-c57f9.firebaseio.com",
    projectId: "cs411-c57f9",
    storageBucket: "cs411-c57f9.appspot.com",
    messagingSenderId: "259780274004"
  };
  firebase.initializeApp(config);
    const res = firebase.auth().signOut();
    res.then(window.location.href = process.env.PUBLIC_URL+"/");
 }

//   resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
      console.log(result);
      window.location.href = process.env.PUBLIC_URL+"/startups/" + result.StartupID;
      this.setState({ value: result.Name });
  }

  handleSearchChange = (e, {value}) => {
    this.setState({ isLoading: true, value })
    var url = `https://backendvaradk2.herokuapp.com/startups?name="${value}"`;
    console.log(url);
    axios.get(url)
        .then((res) => {
            this.setState({results: res.data});
        })
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 300)
  }

  render() {
    // const { isLoading, value, results } = this.state
    const resRender = ({ Name }) => (
      <span key="name">
        {Name}
      </span>
    );
    const Feed = ({results}) => {
        console.log(results);
      return (<ul className = {startupidea.feedul}>
        {results.map(result => (
            <li className = {startupidea.feedli} key = {result.StartupID}>
                <FeedCard elems = {result}/>
            </li>
        ))}
      </ul>
      )};
    return (
        <div>
            <Menu inverted className={startupidea.navbar}>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='editorials'
                        color='red'
                        onClick = {this.Logout}
                        // active={activeItem === 'editorials'}
                        // onClick={this.handleItemClick}
                    > Logout
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Grid>
                <Grid.Column width={15}>
                    <Search
                        input={{ fluid: true }}
                        size='large'
                        loading={this.state.isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                        results={this.state.results}
                        value={this.state.value}
                        resultRenderer={resRender}
                        placeholder="Search for startups here..."
                    />
                </Grid.Column>
                <Button className = {startupidea.gobtn}> Go </Button>
            </Grid>
            <div><Feed results = {this.state.results.slice(this.state.curr_iter, 10)} /></div>
        </div>
    )
  }
}

export default StartUpIdeaFE;