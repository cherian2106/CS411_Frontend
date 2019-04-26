import React, { Component } from 'react';
import axios from 'axios';
import Sugg from '../Sugg/Sugg';
import { Button, Input } from 'semantic-ui-react';
// import NewStartUp from '../../NewStartUp';
import { Link } from 'react-router-dom';
import startupidea from './StartUpIdeaFE.module.scss'
import { Dropdown } from "semantic-ui-react";
import { Select } from 'semantic-ui-react'
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
// // import { Link } from 'react-router-dom';

// class StartUpIdeaFE extends Component
// {
//     constructor() 
//     {
//         super();
    
//         this.state ={
//           SearchResults: []
//         };

//         // this.handleChange = this.handleChange.bind(this);
//     }

//     // componentWillMount(){
//     //     var url = `https://backendvaradk2.herokuapp.com/startups?name=`
//     //     axios.get(url)
//     //     .then((res) => {
//     //         this.setState({SearchResults: res.data});
//     //         console.log(res.data);
//     //     })
//     //     .catch((error) => {
//     //         console.log(error);
//     //     });
//     // }


//     handleChange = () => {
//         var url = `https://backendvaradk2.herokuapp.com/startups?name="${this.search.value}"`;
//         axios.get(url)
//         .then((res) => {
//             this.setState({SearchResults: res.data});
//             console.log(res.data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     }

//     render()
//     {return(
//         <div>
//             <label className = {startupidea.search}>Startup Search</label>
//                 <input
//                     className = {startupidea.searchform}
//                     placeholder="Search for Startups here..."
//                     type="text"
//                     name="Search Bar"
//                     ref={input => this.search = input}
//                     onChange = {this.handleChange}
//                 />
//                 <Dropdown 
//                     placeholder='Select Country'
//                     fluid
//                     search
//                     selection
//                     // value = {this.state.SearchResults.map(a => a.Name)}
//                     options = {this.state.SearchResults.map(a => a.Name)}
//                 />
//                 <button onClick={this.handleChange}>Go</button>
//                 <Link to={process.env.PUBLIC_URL+'/create'}>
//                     <button className={startupidea.ui}>Create StartUp</button>
//                 </Link>
//                 {/* <div><Sugg value = {this.state.SearchResults}/></div> */}
//                 {/* <div><NewStartUp/> </div> */}
//         </div>);
//     }
// }


// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))

class StartUpIdeaFE extends Component {
//   componentWillMount() {
//     this.resetComponent()
//   }
constructor() 
    {
        super();
        this.state ={
            isLoading: false, results: [], value: '', ans: {}
        };

        // this.handleChange = this.handleChange.bind(this);
    }
  resetComponent = () => this.setState({ isLoading: false, results: [], value: '', ans:{} })

  handleResultSelect = (e, { result }) => this.setState({ value: result })

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
    return (
      <Grid>
        <Grid.Column width={6}>
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
    )
  }
}



export default StartUpIdeaFE;