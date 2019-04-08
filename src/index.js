import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StartUpIdeaFE from './StartUpIdeaFE';
import ViewStartup from './ViewStartup';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(<StartUpIdeaFE />, document.getElementById('root'));
ReactDOM.render(<Router>
    <div>
      <Route exact path={process.env.PUBLIC_URL+"/"} component={StartUpIdeaFE} />
      <Route exact path={process.env.PUBLIC_URL+"/startups/:id"} component={ViewStartup} />
    </div>
</Router>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
