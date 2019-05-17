import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Menu from './Menu/Menu';
import Dashboard from './Dashboard/Dashboard';
import Users from './Users/Users';
import ModalManager from './Util/ModalManager/ModalManager';

const App = () => {  
  return (
    <div className="container-fluid">      
      <Router>              
        <div className="row">
        {/* <ModalManager />           */}
          <div className="col-3">
            <Menu />
          </div>

          <div className="col-9">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/users" component={Users}/>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;