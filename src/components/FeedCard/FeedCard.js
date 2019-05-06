import React, { Component } from 'react'
import feedcard from './FeedCard.module.scss'

class Feed extends Component
{
  constructor(props){
    super(props)
    this.state={
      elems : {},
    }
  }


  componentWillMount = () =>{
    this.setState({elems: this.props.elems});
  }

  render() {
      return (
        <div className={feedcard.container}>
          <div className="card">
            <div className={feedcard.title}> {this.state.elems.Name}</div>
            <img className = {feedcard.img} src = 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'></img>
                 
                  <p>
                    Category: {this.state.elems.Category} <br></br>
                    Launch date: {this.state.elems.Launch_date} <br></br>
                    Location: {this.state.elems.Location} <br></br>
                    Amount Raised: {this.state.elems.Money_raised} <br></br>
                  </p>

                  
           
          </div>
        </div>
      )
  }
}
export default Feed