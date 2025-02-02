import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash'
import { Search, Grid, Button, Menu, Header, Segment } from 'semantic-ui-react'
import FeedCard from '../FeedCard/FeedCard';
import firebase from 'firebase';
import startupidea from './StartUpIdeaFE.module.scss'
import Auth from '../../config.js'
import { Link } from 'react-router-dom';


class StartUpIdeaFE extends Component {
constructor(props)
  {
        super(props);
        this.state ={
            isLoading: false,
            results: [],
            elems: [],
            value: '',
            // ans: {},
            curr_iter: 0
        };
        this.Logout = this.Logout.bind(this);
        this.Create = this.Create.bind(this);
  }

componentWillMount(){

  var url = `https://backendvaradk2.herokuapp.com/startups`;
    // console.log(url);
    axios.get(url)
        .then((res) => {
            var n = 9;
            var result = new Array(n),
            len = res.data.length,
            taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            while (n--) {
                var x = Math.floor(Math.random() * len);
                result[n] = res.data[x in taken ? taken[x] : x];
                taken[x] = --len in taken ? taken[len] : len;
            }
            this.setState({elems: result});
        })
}

Create = () => {
  window.location.href = process.env.PUBLIC_URL+`/create/`+this.props.match.params.uid;
}

 Logout = () => {
    Auth.signOut().then(function(result){window.location.href = process.env.PUBLIC_URL+"/"})
    .catch(function(err){window.alert(err.code)});
 }

 viewMyStartups = () => {
    window.location.href = process.env.PUBLIC_URL+`/mystartups/`+this.props.match.params.uid;
 }


  handleResultSelect = (e, { result }) => {
      // console.log(result);
      window.location.href = process.env.PUBLIC_URL+"/startups/" + result.StartupID + "/" + this.props.match.params.uid;
      this.setState({ value: result.Name });
  }

  handleSearchChange = (e, {value}) => {
    this.setState({ isLoading: true, value })
    var url = `https://backendvaradk2.herokuapp.com/startups?name="${value}"`;
    // console.log(url);
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
      return (<ul className = {startupidea.feedul}>
        {results.map(result => (
            <li className = {startupidea.feedli} key = {result.StartupID}>
                <FeedCard elems = {result}/>
            </li>
        ))}
      </ul>
      )};
    return (
    <div className = {startupidea.whole}>
        <div>
            <Menu inverted className={startupidea.navbar}>
                <Menu.Item
                    name='editorials'
                    onClick = {this.Create}
                > Create New Startup
                </Menu.Item>
                <Link to={process.env.PUBLIC_URL+'/startupidea/'+this.props.match.params.uid} >
                <Menu.Item
                    name='editorials'
                    onClick = {this.predict_Startup}
                > Predict Startup Success
                </Menu.Item></Link>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='editorials'
                        color='red'
                        onClick = {this.viewMyStartups}
                    > View my startups
                    </Menu.Item>
                    <Menu.Item
                        name='editorials'
                        color='red'
                        onClick = {this.Logout}
                    > Logout
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Grid>
                <Grid.Column width={16}>
                    <Search className = {startupidea.search}
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
            </Grid>
            <div className={startupidea.title_container}>
              <div className={startupidea.title1}>Suggested Feed</div>
            </div>
            <br></br><br></br>
            <div><Feed results = {this.state.elems} /></div>
        </div>
    </div>
    )
  }
}

export default StartUpIdeaFE;