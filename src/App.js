import React from 'react';
import Nav from './Nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import Homepage from './Homepage';
import Users from './Users';
import Singleuser from './Singleuser';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router >
      <div>
        <Nav />
          <Route path="/" exact component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/contactus" component={Contact} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" exact component={Singleuser} />
      </div>
    </Router>
  );
}

export default App;
