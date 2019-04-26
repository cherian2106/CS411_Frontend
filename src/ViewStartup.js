import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UpdateForm from './UpdateForm';
import Axios from 'axios';
// import 'semantic-ui-react';

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
      // <div className="CardContainer">
      <div>
        <Link to={process.env.PUBLIC_URL+'/search'}>
          <Button> Back to Search </Button>
        </Link>
        <Card>
          <Card.Content>
              <Card.Header>{this.state.elems.Name} </Card.Header>
              {/* <Card.Meta> veiruv </Card.Meta> */}
          </Card.Content>
          <Card.Content>
              Category: {this.state.elems.Category} <br></br>
              Launch date: {this.state.elems.Launch_date} <br></br>
              Location: {this.state.elems.Location} <br></br>
              Money raised: {this.state.elems.Money_raised} <br></br>
          </Card.Content>
        </Card>
        <UpdateForm id = {this.state.elems.StartupID}></UpdateForm>
      </div>
    )
  }
}
export default ViewStartup
