import React, { Component } from 'react';
import axios from 'axios';
import Sugg from '../Sugg/Sugg';
import { Button } from 'semantic-ui-react';
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
            isLoading: false, results: [{title:""}], value: '' 
        };

        // this.handleChange = this.handleChange.bind(this);
    }
  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.Name })

  handleSearchChange = (e, {value}) => {
    this.setState({ isLoading: true, value })
    var url = `https://backendvaradk2.herokuapp.com/startups?name="${value}"`;
    console.log(url);
    axios.get(url)
        .then((res) => {
            this.setState({results: {title: res.data.map(a=>a.Name)}});
            console.log(res.data);
        })

    setTimeout(() => {
    //   if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.results, isMatch),
      })
    }, 300)
  }

  render() {
    // const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={this.state.isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={this.state.results}
            value={this.state.value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state.results, null, 2)}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}



export default StartUpIdeaFE;