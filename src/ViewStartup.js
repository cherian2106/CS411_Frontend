import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
// import axios from 'axios'
import { Link } from 'react-router-dom';
import UpdateForm from './UpdateForm';
import Axios from 'axios';
class ViewStartup extends Component
{
  constructor(props){
    super(props)
    this.state={
      id : props.match.params.id,
      elems : {},
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = () => {
    // console.log(this.state.id);
    var url = `https://backendvaradk2.herokuapp.com/startups/${this.state.id}`
    Axios.delete(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentWillMount = () =>{
    console.log(this.props.location.state.elems);
    this.setState({elems: this.props.location.state.elems});
  }

  render() {
return(
  <div className="CardContainer">
        <Link to={process.env.PUBLIC_URL+'/'}><button className="ui button">Back To Search</button></Link>
        <div className="ui centered card">
            <Card>
            <Image src =  ''/>
            <Card.Content>
                <Card.Header>StartUp name: {this.state.elems.Name} </Card.Header>
                <Card.Meta>
                    {/* <span className='date'>Some Other field : Some other field</span> */}
                </Card.Meta>
                <Card.Description>{/*Description of Startup*/}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p>
                <Icon name='user' />
                  Category: {this.state.elems.Category} <br></br>
                  Launch date: {this.state.elems.Launch_date} <br></br>
                  Location: {this.state.elems.Location} <br></br>
                  Money raised: {this.state.elems.Money_raised} <br></br>
                </p>
            </Card.Content>
            <button onClick = {this.handleDelete} className="ui button">Delete</button>
            </Card>
            </div>
            <UpdateForm id = {this.state.elems.StartupID}></UpdateForm>
        </div>
    )
  }
}
export default ViewStartup
