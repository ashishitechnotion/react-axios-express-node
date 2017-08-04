import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router-dom';
import {Router,HashRouter,Route,browserHistory} from 'react-router-dom';
import Navbar from '../containers/navBar.jsx';
import TestExpressApi from './testexpressapi.js';



class App extends React.Component {
   render() {
      return (
     <HashRouter>
    <div>
    <Route  path="/"  component = {Navbar} />
     <Route path = "/expressApi" component = {TestExpressApi} />
    
    
    </div>
</HashRouter>
      )
   }
}

export default App;