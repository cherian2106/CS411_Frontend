import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import Feed from '../../Feed';
import firebase from 'firebase';

class StartUpIdeaFE extends Component {
constructor() 
  {
        super();
        this.state ={
            isLoading: false, results: [], value: '', ans: {}
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
    
  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.Name })

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
    const Test = ({results}) => (
      <>
        {results.map(result => (
            <Feed elems = {result}/>
        ))}
      </>
    ); 
    return (
      <div>
        <button onClick = {this.Logout} label="Login">Logout</button>
        <Grid>
          <Grid.Column width={20}>
            <Search
              loading={this.state.isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
              results={this.state.results}
              value={this.state.value}
              resultRenderer={resRender}
              // {...this.props}
            />
          </Grid.Column>
        </Grid>
        <div><Test results = {this.state.results} /></div>
      </div>
    )
  }
}

export default StartUpIdeaFE;