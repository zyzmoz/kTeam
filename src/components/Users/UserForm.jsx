import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import './Users.css';
import { closeModal } from '../../actions/modal';
import { connect } from 'react-redux';

const mapState = (state) => ({
  modal: state.modal
});

const actions = {
  closeModal
}

const UserForm = (props) => {
  const handleSubmit = (data, { resetForm }) => {
    console.log(data);
    props.closeModal();
    resetForm();
  }

  const cancel = () => {
    props.closeModal();
  }

  return (
    <div className="form form-view">
      <Form onSubmit={handleSubmit} >
        <div className="form-group">
          <label>Nome:</label>
          <Input className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <Input className="form-control" name="email" />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <Input className="form-control" name="phone" />
        </div>
        <button type="submit" className="btn btn-success">Gravar</button>
        <button onClick={() => cancel} className="btn btn-danger">Cancelar</button>
      </Form>
    </div>
  );
};

export default connect(mapState, actions)(UserForm);