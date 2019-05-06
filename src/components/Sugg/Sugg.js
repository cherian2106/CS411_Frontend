import React, { Component } from 'react'
import sugg from './Sugg.module.scss';
import { Link } from 'react-router-dom';

class Sugg extends Component
{
  constructor(props){
    super(props)
    this.state = {
      elems : this.props.value,
      idx : 0
    }
  }
    render(){
      const options = this.props.value.map((r, index) => (
      <Link key={r.StartupID} to={{pathname : process.env.PUBLIC_URL+"/startups/" + r.StartupID,
        state: {
            elems: r
          }
        }}>
        <div className = {sugg.list}>
          <li className={sugg.elem} key={r.StartupID}>
            {r.Name}
          </li>
        </div>
      </Link>
    ))
    return <div className={sugg.cont}><br></br><ul>{options}</ul></div>
  }
}

export default Sugg