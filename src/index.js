import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './components/LoginPage/LoginPage';
import StartUpIdeaFE from './components/StartUpIdeaFE/StartUpIdeaFE';
import ViewStartup from './ViewStartup';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import UpdateForm from './UpdateForm';
import NewStartUp from './NewStartUp';
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<LoginPage />, document.getElementById('root'));
ReactDOM.render(<Router>
    <div>
      <Route exact path={process.env.PUBLIC_URL+"/"} component={LoginPage} />
      <Route exact path={process.env.PUBLIC_URL+"/create"} component={NewStartUp} />
      <Route exact path={process.env.PUBLIC_URL+"/Search"} component={StartUpIdeaFE} />
      <Route exact path={process.env.PUBLIC_URL+"/startups/:id"} component={ViewStartup} />
    </div>
</Router>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
