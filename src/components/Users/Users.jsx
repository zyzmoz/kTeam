import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const Users = ({showModal}) => {
  return (
    <div>
      <h3>Usuários</h3>
      <button className="btn btn-success" onClick={() => showModal(<UserForm />)}>Novo</button>
      <UserList />
    </div>
  );
};

export default Users;