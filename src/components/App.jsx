import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Menu from './Menu/Menu';
import Dashboard from './Dashboard/Dashboard';
import Users from './Users/Users';
import { connect } from 'react-redux';
import { showModal } from '../actions/modal';
import ModalManager from './Util/ModalManager/ModalManager';

const mapState = (state) => ({
  modal: state.modal
});

const actions = {
  showModal  
}

const App = (props) => {
  const showModal = (component) => {
    props.showModal(component);
  }

  const { modal } = props;  
  return (
    <div className="container-fluid">
      <Router>
        <div className="row">
          {(modal && modal.show) && <ModalManager children={modal.component} />}
          <div className="col-3">
            <Menu />
          </div>

          <div className="col-9">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/users" component={() => <Users showModal={showModal} />} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default connect(mapState, actions)(App);