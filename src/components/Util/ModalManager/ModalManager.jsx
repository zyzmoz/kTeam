import React, { Component } from 'react';
import './ModalManager.css';


class ModalManager extends Component {
  render() {
    return (
      <div className="modal-manager">
        <div className="modal-component">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ModalManager;
