import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { saveUser } from '../../actions/users';

const mapState = (state) => ({
  users: state.users.list
});

const actions = {
  saveUser
}

const Users = (props) => {
  const { users } = props;
  return (
    <div>
      <h3>Usuários</h3>
      <button className="btn btn-success" onClick={() => props.showModal(<UserForm saveUser={props.saveUser} />)}>Novo</button>
      <UserList users={users} />
    </div>
  );
};

export default connect(mapState, actions)(Users);